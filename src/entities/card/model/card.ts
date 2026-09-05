export function handleClick(isActive?: boolean, onClick?: () => void) {
  if (isActive && onClick) {
    onClick();
  }
}
