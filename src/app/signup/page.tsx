export default function SignupPage() {
  return (
    <div className="mx-auto max-w-sm px-6 py-20">
      <h1 className="font-display text-3xl mb-6 text-center">Sign up</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-full border border-forest/15 bg-cream px-4 py-3 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/15"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-full border border-forest/15 bg-cream px-4 py-3 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/15"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-full border border-forest/15 bg-cream px-4 py-3 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/15"
        />
        <button
          type="submit"
          className="w-full px-4 py-3 rounded-2xl bg-forest text-cream font-medium hover:bg-forest-light transition-colors"
        >
          Create account
        </button>
      </form>
      <p className="text-sm text-forest/60 text-center mt-6">
        This is a demo — no accounts are actually created.
      </p>
    </div>
  );
}
