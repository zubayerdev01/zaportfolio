'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import  SectionHeading  from '@/components/section-heading'
import { siteConfig } from '@/lib/site-config'
import ContactForm from './ContactForm'
import { useSectionInView } from '@/hooks/use-section-in-view'
export default function ContactSection() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section 
      ref={ref}
    id="contact"
      className="my-10 w-full scroll-mt-28 md:mb-20"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading
        heading="Get In Touch"
        content={
          <>
            Please contact me directly at{' '}
            <Button
              variant="link"
              className="text-muted-foreground hover:text-foreground h-fit p-0 font-medium underline transition-colors"
              asChild
            >
              <Link href={siteConfig.links.mailTo}>
                {siteConfig.contact.email}
              </Link>
            </Button>{' '}
            or through this form.
          </>
        }
      />
      <ContactForm />
    </motion.section>
  )
}
