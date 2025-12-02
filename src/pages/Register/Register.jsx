import { useState } from "react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register:", { name, email, password });
  };

  return (
    <>
    <div className="bg-creamdark px-4 py-12 border-4 border-green-950/10 max-w-sm mx-auto mt-25">
      <h2 className="text-3xl font-semibold text-brown mb-4 text-center">
        Create your account
      </h2>
      <div className="flex bg-black/10 py-2 rounded-2xl items-center justify-center gap-4 font-semibold text-brown mb-8 text-center">
        <p>Have you already registered ?</p>
        <Link to="/login" className="bg-green text-creamdark px-3 py-1 rounded-xl">Login</Link>
      </div>
      <form onSubmit={handleRegister} className="space-y-5">

        {/* Full name */}
        <div className="relative">
          <FiUser className="absolute left-4 top-3.5 text-green text-xl" />
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full pl-12 pr-4 py-2 rounded-xl border-2 bg-white/30 border-green-950/30  text-brown
            focus:outline-none focus:border-green"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <FiMail className="absolute left-4 top-3.5 text-green text-xl" />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 pr-4 py-2 rounded-xl border-2 bg-white/30 border-green-950/30  text-brown
            focus:outline-none focus:border-green"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <FiLock className="absolute left-4 top-3.5 text-green text-xl" />
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-12 pr-4 py-2 rounded-xl border-2 bg-white/30 border-green-950/30 text-brown
            focus:outline-none focus:border-green"
          />
        </div>

        <button className="w-full bg-green text-creamlight py-2 rounded-xl font-semibold text-lg hover:opacity-90 transition">
          Create Account
        </button>
      </form>
    </div>
    </>
  );
}
