# backend APIs
- layout api
  - first_name
  - last_name
  - copyright_year
  - updated_on
  - weblinks
    - icons need to be readable
- navbar-data
  - first_name
  - middle_name
  - last_name
- footer-data
  - copyright_year
  - updated_on
  - weblinks
- Bio api
  - first_name
  - middle_name
  - last_name
  - location
  - weblinks
  - bio_short
- News api
- Publication api
- Project api
- Talk API

- About page has a chinese version.
  - x


{
    first_name: string, 
    middle_name: string,
    last_name: string,
    copyright_year: number,
    updated_on: {
      year: number,
      month: number,
      day: number
    },
    weblinks: {
      id: number,
      name: string,
      url: string,
      icon: string
    }
  }

<body className="container mx-auto w-full sm:w-auto md:w-auto lg:w-auto">

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
          required
        />
  - Improvements:
    - dynamic meta data title.

      <NavbarContent>
        <NavbarItem className="hidden">
          <p>ThemeToggle</p>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {
          menuItems.map((item, index) => (
              <NavbarItem key={`${item}-${index}`}>
                <Link
                  color="foreground"
                  className="w-full"
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarItem>
            )
          )
        }
      </NavbarMenu>

- Versions
  - 0.0.1, switch to NextUI 

