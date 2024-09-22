import { Flex, Spinner } from '@chakra-ui/react'
import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'

// import Sidebar from '~/components/Common/Sidebar'
// import UserMenu from '~/components/Common/UserMenu'
// import useAuth, { isLoggedIn } from '~/hooks/useAuth'

import HomeNav from '~/components/Home/Common/HomeNav'

export const Route = createFileRoute('/_layout')({
  component: Layout,
})

function Layout() {
  return (
    <>
      <HomeNav />
      <Flex maxW="large" h="auto" position="relative">
        <Outlet />
      </Flex>
    </>
  )
}
