import { users } from "../../lib/users";
import Link from "next/link";
import { notFound } from "next/navigation"; // 💡 見本と同じように notFound をインポート

interface Props {
  params: Promise<{ userId: string }>; // ⭕ あなたの最新環境用の設定
}

export default async function UserPage(props: Props) {
  const params = await props.params; // ⭕ あなたの最新環境用の設定
  
  // 配列から該当するユーザーを探します
  const user = users.find((u) => u.id === Number(params.userId));

  // 💡 見本と同じように、ユーザーがいない場合は「404 (Not Found)」の画面へ飛ばします
  if (!user) {
    notFound();
  }

  // ✨ 見本と「完全に同じHTML・CSSの組み合わせ」に揃えました！
  return (
    <>
      <h1 className="text-lg border-b pb-1 mb-1">
        {user.name}
      </h1>
      <p>
        {user.prof}
      </p>
      <p className="mt-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700">Go back</Link>
      </p>
    </>
  );
}