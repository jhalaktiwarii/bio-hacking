'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useScroll, motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { Logo } from './logo'
import MegaMenu from '@/components/ui/mega-menu'
import type { MegaMenuItem } from '@/components/ui/mega-menu'
import {
  Heart,
  Syringe,
  Brain,
  TestTube,
  Sparkles,
  Crown,
  Shield,
  Scale,
  Pill,
  Dna
} from 'lucide-react'

// Mobile menu items
const mobileMenuItems = [
    { name: 'About', href: '/about' },
    { name: 'Genetic Testing', href: '/genetic-testing' },
    { name: 'Hormone Therapy', href: '/hormone-replacement-therapy' },
    { name: 'Peptide Therapy', href: '/peptide-therapy' },
    { name: 'Weight Loss', href: '/weight-loss-therapy' },
    { name: 'Sexual Wellness', href: '/sexual-wellness' },
    { name: 'Mental Health', href: '/cognitive-mental-health' },
    { name: 'Skin & Hair', href: '/skin-repair-wellness' },
    { name: 'Hair Restoration', href: '/hair-loss-therapy' },
    { name: 'Injectable Vitamins', href: '/injectable-vitamins' },
    { name: 'Reorder Medication', href: '/reorder-medication' },
]

// Desktop mega menu items
const NAV_ITEMS: MegaMenuItem[] = [
  {
    id: 1,
    label: "About",
    link: "/about"
  },
  {
    id: 2,
    label: "Services",
    subMenus: [
      {
        title: "Genetic Testing",
        items: [
          {
            label: "Genetic Testing Overview",
            description: "ClarityX® partnership for personalized medicine",
            icon: Dna,
            href: "/genetic-testing",
          },
          {
            label: "Mindwell® Mental Health",
            description: "130+ FDA-approved mental health medications",
            icon: Brain,
            href: "/genetic-testing/mindwell",
          },
          {
            label: "Max Rx® Full Spectrum",
            description: "275+ medications across 31 categories",
            icon: TestTube,
            href: "/genetic-testing/max-rx",
          },
          {
            label: "Thrive Nutrition",
            description: "Nutritional longevity insights",
            icon: Sparkles,
            href: "/genetic-testing/thrive",
          },
        ],
      },
      {
        title: "Medical Therapies",
        items: [
          {
            label: "Hormone Therapy",
            description: "Restore balance, energy, and vitality",
            icon: Heart,
            href: "/hormone-replacement-therapy",
          },
          {
            label: "Peptide Therapy",
            description: "Advanced cellular optimization",
            icon: Syringe,
            href: "/peptide-therapy",
          },
          {
            label: "Weight Loss",
            description: "Scientific weight management",
            icon: Scale,
            href: "/weight-loss-therapy",
          },
          {
            label: "Sexual Wellness",
            description: "Restore confidence & intimacy",
            icon: Shield,
            href: "/sexual-wellness",
          },
        ],
      },
      {
        title: "Specialized Care",
        items: [
          {
            label: "Mental Health",
            description: "Peak mental performance",
            icon: Brain,
            href: "/cognitive-mental-health",
          },
          {
            label: "Skin Repair",
            description: "Doctor-prescribed skin solutions",
            icon: Sparkles,
            href: "/skin-repair-wellness",
          },
          {
            label: "Hair Restoration",
            description: "Proprietary hair restoration",
            icon: Crown,
            href: "/hair-loss-therapy",
          },
          {
            label: "Injectable Vitamins",
            description: "Medical-grade nutrient therapy",
            icon: Pill,
            href: "/injectable-vitamins",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "How It Works",
    link: "/#how-it-works"
  },
  {
    id: 4,
    label: "Pricing",
    link: "/#pricing"
  },
  {
    id: 5,
    label: "Contact",
    link: "/#contact"
  },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-50 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/95 backdrop-blur-xl border border-white/10 shadow-2xl')}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        
                        {/* Logo and Mobile Menu Button */}
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2 z-30">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-30 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex lg:items-center lg:gap-8">
                            <MegaMenu items={NAV_ITEMS} className="flex items-center" />
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex lg:items-center lg:gap-3">
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="border-brand-accent/30 hover:bg-brand-accent/10 text-brand-accent hover:text-brand-accent cursor-pointer">
                                <Link href="/reorder-medication" className="cursor-pointer">
                                    <span>Reorder Meds</span>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="sm"
                                className="bg-brand-accent hover:bg-brand-accent/90 text-white cursor-pointer">
                                <Link href="/select-profile" className="cursor-pointer">
                                    <span>Book Free Consultation</span>
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile Menu */}
                        <div className="bg-background/95 backdrop-blur-xl in-data-[state=active]:block lg:hidden mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl">
                            <div className="w-full">
                                <ul className="space-y-6 text-base">
                                    {mobileMenuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-brand-accent block duration-150 transition-colors"
                                                onClick={() => setMenuState(false)}>
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 pt-6 border-t border-white/10">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="border-brand-accent/30 hover:bg-brand-accent/10 text-brand-accent hover:text-brand-accent cursor-pointer">
                                    <Link href="/reorder-medication" className="cursor-pointer">
                                        <span>Reorder Meds</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-brand-accent hover:bg-brand-accent/90 text-white cursor-pointer">
                                    <Link href="/select-profile" className="cursor-pointer">
                                        <span>Book Free Consultation</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
