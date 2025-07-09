import { useState } from "react";
import "./App.css";

function App() {
  // 1. 状態
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // 2. 入力ハンドラ
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 3. 送信ハンドラ
  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("送信中…");

    try {
      await fetch(import.meta.env.VITE_GAS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        mode: "no-cors", // GAS は CORS ヘッダを返さない
      });
      setForm({ name: "", email: "", message: "" });
      setStatus("送信完了！");
    } catch (err) {
      console.error(err);
      setStatus("送信失敗");
    }
  };

  // 4. ここが **コンポーネントの戻り値**（JSX）
  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-md mx-auto p-6">
      <input
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="お名前"
        required
        className="w-full border p-2"
      />
      <input
        name="email"
        value={form.email}
        onChange={onChange}
        placeholder="メール"
        type="email"
        required
        className="w-full border p-2"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={onChange}
        placeholder="お問い合わせ内容"
        required
        className="w-full border p-2 h-32"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        送信
      </button>
      <p>{status}</p>
    </form>
  );
}

export default App;
