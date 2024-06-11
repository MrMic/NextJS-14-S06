import { createPost } from '@/actions/posts';
import PostForm from '@/components/post-form';

export default function NewPostPage() {
  // INFO: Server Action

  return <PostForm action={createPost} />
}
