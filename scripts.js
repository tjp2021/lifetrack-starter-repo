// LifeTrack — minimal frontend wiring for auth + tasks
// Replace with your Supabase project credentials (public anon key only)
const SUPABASE_URL = "https://YOUR-PROJECT-id.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_PUBLIC_ANON_KEY"; // anon key is safe on client with RLS

// Initialize client
const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// UI elements
const authOut = document.getElementById("auth-when-signed-out");
const authIn  = document.getElementById("auth-when-signed-in");
const authMsg = document.getElementById("auth-msg");
const userEmail = document.getElementById("user-email");
const btnSignup = document.getElementById("btn-signup");
const btnSignin = document.getElementById("btn-signin");
const btnSignout= document.getElementById("btn-signout");

const taskEntry = document.getElementById("task-entry");
const taskTitle = document.getElementById("task-title");
const btnAdd    = document.getElementById("btn-add");
const taskList  = document.getElementById("task-list");
const emptyState= document.getElementById("empty-state");
const toggleCompleted = document.getElementById("toggle-completed");

// Helpers
function setMsg(msg, isError=false){
  authMsg.textContent = msg || "";
  authMsg.className = "text-sm " + (isError ? "text-amber-700" : "text-gray-500");
}
function $(id){ return document.getElementById(id); }

// Auth flows
btnSignup?.addEventListener("click", async () => {
  const email = $("#email").value.trim();
  const password = $("#password").value.trim();
  setMsg("Creating account…");
  const { error } = await client.auth.signUp({ email, password });
  if (error) return setMsg(error.message, true);
  setMsg("Check your email to confirm your account.");
});

btnSignin?.addEventListener("click", async () => {
  const email = $("#email").value.trim();
  const password = $("#password").value.trim();
  setMsg("Signing in…");
  const { error } = await client.auth.signInWithPassword({ email, password });
  if (error) return setMsg(error.message, true);
  setMsg("");
});

btnSignout?.addEventListener("click", async () => {
  await client.auth.signOut();
  setMsg("Signed out.");
});

// Session handling
client.auth.onAuthStateChange(async (_event, session) => {
  if (session?.user) {
    authOut.classList.add("hidden");
    authIn.classList.remove("hidden");
    userEmail.textContent = session.user.email;
    taskEntry.classList.remove("hidden");
    await loadTasks();
  } else {
    authOut.classList.remove("hidden");
    authIn.classList.add("hidden");
    taskEntry.classList.add("hidden");
    taskList.innerHTML = "";
    emptyState.classList.add("hidden");
  }
});

// Tasks
async function loadTasks(){
  const showCompleted = toggleCompleted.checked;
  let query = client.from("tasks").select("*").order("inserted_at", { ascending: false });
  if (!showCompleted) query = query.eq("done", false);
  const { data, error } = await query;
  if (error) { console.error(error); return; }
  renderTasks(data || []);
}

function renderTasks(items){
  taskList.innerHTML = "";
  if (!items.length){ emptyState.classList.remove("hidden"); return; }
  emptyState.classList.add("hidden");
  for (const t of items){
    const li = document.createElement("li");
    li.className = "flex items-center justify-between py-2";
    li.innerHTML = `
      <label class="flex items-center gap-3">
        <input type="checkbox" ${t.done ? "checked": ""} class="h-5 w-5">
        <span class="${t.done ? "line-through text-gray-400" : ""}">${t.title}</span>
      </label>
      <button class="text-xs text-red-600">Delete</button>
    `;
    const checkbox = li.querySelector("input");
    const delBtn = li.querySelector("button");
    checkbox.addEventListener("change", async () => {
      await client.from("tasks").update({ done: checkbox.checked }).eq("id", t.id);
      await loadTasks();
    });
    delBtn.addEventListener("click", async () => {
      await client.from("tasks").delete().eq("id", t.id);
      await loadTasks();
    });
    taskList.appendChild(li);
  }
}

btnAdd?.addEventListener("click", async () => {
  const title = taskTitle.value.trim();
  if (!title) return;
  taskTitle.value = "";
  const { data: { user } } = await client.auth.getUser();
  await client.from("tasks").insert([{ title, user_id: user.id }]);
  await loadTasks();
});

toggleCompleted?.addEventListener("change", loadTasks);

// Initial
(async () => {
  const { data: { session } } = await client.auth.getSession();
  if (session?.user){
    authOut.classList.add("hidden");
    authIn.classList.remove("hidden");
    userEmail.textContent = session.user.email;
    taskEntry.classList.remove("hidden");
    await loadTasks();
  }
})();
