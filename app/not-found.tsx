import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
      </p>
      <Button asChild>
        <Link href="/">
          Return Home
        </Link>
      </Button>
    </div>
  )
}