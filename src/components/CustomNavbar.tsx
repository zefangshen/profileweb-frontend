'use client';
import React from "react";
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import "@/styles/globals.css";

export default function CustomNavbar({data}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "About",
    "Publications",
    "Projects",
    "Talks",
    "Contact",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className="custom-navbar justify-between">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-2xl">{data.first_name} {data.middle_name} {data.last_name}</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Publications
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden">
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden">
          <Link color="foreground" href="#">
            Talks
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden">
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
