import React from 'react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from './ui/sidebar';
import { SidebarHeader } from './ui/sidebar';
import { SearchIcon, BotIcon, HomeIcon, InboxIcon, PlusIcon, SettingsIcon, FileIcon, ShapesIcon, TrashIcon, CalendarIcon, PlaneIcon, FileQuestionIcon, HelpCircleIcon } from 'lucide-react';
import Link from 'next/link';

const sections = [
    {
        id: 1,
        buttons: [
            {
                icon: SearchIcon,
                label: 'Search',
            },
            {
                icon: BotIcon,
                label: 'Notion AI',
                href: '/chat',
            },
            {
                icon: HomeIcon,
                label: 'Home',
                href: '/home',
            },
            {
                icon: InboxIcon,
                label: 'Inbox',
                href: '/inbox',
            },
        ]
    },
    {
        id: 2,
        label: 'Shared',
        buttons: [
            {
                icon: PlusIcon,
                label: 'Add new',
            },
        ]
    },
    {
        id: 3,
        label: 'Private',
        buttons: [
            {
                icon: FileIcon,
                label: 'Getting Started',
                href: '/getting-started',
            },
            {
                icon: PlusIcon,
                label: 'Add new',
            },
        ]
    },
    {
        id: 4,
        buttons: [
            {
                icon: SettingsIcon,
                label: 'Settings',
            },
            {
                icon: ShapesIcon,
                label: 'Templates',
            },
            {
                icon: TrashIcon,
                label: 'Trash',
            },
        ]
    }
]
export default function AppSidebar() {
  return (
    <Sidebar>
        <SidebarContent>
          <SidebarHeader>
            <div className="flex items-center justify-center gap-2 px-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-violet-300" />
              <span className="font-semibold">Notion Clone</span>
            </div>
          </SidebarHeader>
          {sections.map((section) => (
            <SidebarGroup key={section.id}>
                {section.label && <SidebarGroupLabel>{section.label}</SidebarGroupLabel>}
                <SidebarGroupContent>
                    <SidebarMenu>
                        {section.buttons.map((button) => (
                            <SidebarMenuItem key={button.label}>
                                <Link href={button.href || ''}>
                                    <SidebarMenuButton className="cursor-pointer">
                                        <button.icon className="h-4 w-4" />
                                        <span>{button.label}</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
          ))}
          <SidebarFooter>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                        <CalendarIcon className="h-4 w-4" />
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <PlaneIcon className="h-4 w-4" />
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <HelpCircleIcon className="h-4 w-4" />
                    </SidebarMenuButton>
                </SidebarMenuItem>
                </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
          </SidebarFooter>
        </SidebarContent>
    </Sidebar>
  )
}
