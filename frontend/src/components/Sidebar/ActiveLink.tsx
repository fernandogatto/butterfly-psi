import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (!shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) ||
    asPath.startsWith(String(rest.as)))) {
      isActive = true;
    }

  return (
    <Link {...rest} style={{ width: '100%' }}>
      {cloneElement(children, {
        display: 'block',
        width: '100%',
        padding: '5px 10px',
        borderRadius: '4px',
        color: 'gray.700',
        background: isActive && 'gray.100',
        opacity: isActive && '1',
        textDecoration: 'none',
        _hover: {
          background: 'gray.200'
        }
      })}
    </Link>
  )
}
