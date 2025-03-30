import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BlogService } from '../../services/blogApi';
import RTE from '../RTE';

function PostForm({ post }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  const { register, handleSubmit, setValue, control, watch } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.slug || '',
      content: post?.content || '',
      status: post?.status || 'draft',
    },
  });

  const submit = async (data) => {
    try {
      let imageUrl = post?.main_image_url || '';
      if (data.image && data.image[0]) {
        const uploadedImage = await BlogService.uploadImage(data.image[0]);
        if (uploadedImage?.url) imageUrl = uploadedImage.url;
      }

      const payload = {
        ...data,
        author_id: userData?.id,
        main_image_url: imageUrl,
      };

      if (post) {
        await BlogService.update(post.id, payload);
      } else {
        await BlogService.create(payload);
      }

      navigate('/'); // Redirect after success
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4 p-4 border rounded shadow-md">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          {...register('title', { required: true })}
          type="text"
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Slug</label>
        <input
          {...register('slug', { required: true })}
          type="text"
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <RTE name="content" control={control} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Main Image</label>
        <input {...register('image')} type="file" className="w-full p-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select {...register('status')} className="w-full p-2 border rounded">
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        {post ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  );
}

export default PostForm;
