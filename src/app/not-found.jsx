import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">This page failed to generalize beyond the training distribution.</p>
      <Link href="/">
        <button className='btn btn-soft rounded-md'>
          Take me home!
        </button>
      </Link>
    </div>
  )
}