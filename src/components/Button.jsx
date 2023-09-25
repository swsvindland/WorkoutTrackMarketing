import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export const Button = forwardRef(function Button(
  { className, href, ...props },
  ref
) {

  const btn = "inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-secondary shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-800";

  return href ? (
    <Link ref={ref} href={href} className={clsx(className, btn)} {...props} />
  ) : (
    <button ref={ref} className={clsx(className, btn)} {...props} />
  )
})
