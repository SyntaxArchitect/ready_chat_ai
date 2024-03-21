import MessageList from "./components/MessageList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 sm:p-12">
      <MessageList />
    </main>
  );
}