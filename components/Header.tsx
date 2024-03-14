const Header = () => {
  return (
    <header
      className="fixed -top[120px] p-4 md:p-8 w-full col-span-full z-10"
    >
      <nav
        className="flex items-center"
      >
        <div className="nav-logo flex-1">
          <a
            href="#"
            className="no-underline uppercase font-medium"
          >
            kudos
          </a>
        </div>
        <div className="menu flex-1 flex justify-center">
          <p className="no-underline uppercase font-medium">
            Menu
          </p>
        </div>
        <div className="shop flex-1 flex justify-end gap-8">
          <a
            href="#"
            className="no-underline uppercase font-medium"
          >
            Shop
          </a>
          <a
            href="#"
            className="no-underline uppercase font-medium"
          >
            Cart (0)
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header;