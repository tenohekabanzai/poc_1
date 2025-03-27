"use client";
import AdminComp from "@/components/adminComp";
import CustomerComp from "@/components/CustomerComp";
import { usePathname } from "next/navigation";

export default function PathProvider({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  if(isAdmin)
  return <AdminComp>{children}</AdminComp>
  return <CustomerComp>{children}</CustomerComp>

}