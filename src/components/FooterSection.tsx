import React from 'react'
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
     <footer className="text-muted-foreground my-2 text-sm">
      © {new Date().getFullYear()}{' '}
      <Button variant="link" className="text-muted-foreground p-0 font-medium">
        <a href={siteConfig.links.github}>{siteConfig.creator}</a>
      </Button>
      . All rights reserved.
    </footer>
  )
}

