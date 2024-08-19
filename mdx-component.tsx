import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 my-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 my-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 my-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed my-2">
        {children}
      </p>
    ),
    a: ({ children, ...props }) => (
      <a
        className="text-blue-600 hover:underline text-base sm:text-lg md:text-xl"
        {...props}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside my-2 text-base sm:text-lg md:text-xl">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside my-2 text-base sm:text-lg md:text-xl">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed my-1">
        {children}
      </li>
    ),
    ...components,
  };
}
