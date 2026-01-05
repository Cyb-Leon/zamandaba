import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);
  private document = inject(DOCUMENT);

  private readonly baseUrl = 'https://www.zamandaba.co.za';
  private readonly defaultImage = 'https://www.zamandaba.co.za/logo.png';
  private readonly siteName = 'Zamokuhle Ndaba Portfolio';
  private readonly twitterHandle = '@zev219';

  /**
   * Update all SEO meta tags for a page
   */
  updateSeoTags(config: SeoConfig): void {
    const fullTitle = `${config.title} | Zamokuhle Ndaba`;
    const url = config.url ? `${this.baseUrl}${config.url}` : this.baseUrl;
    const image = config.image || this.defaultImage;
    const type = config.type || 'website';

    // Update title
    this.title.setTitle(fullTitle);

    // Update standard meta tags
    this.updateMetaTag('title', fullTitle);
    this.updateMetaTag('description', config.description);
    if (config.keywords) {
      this.updateMetaTag('keywords', config.keywords);
    }

    // Update Open Graph tags
    this.updateMetaTag('og:title', fullTitle, true);
    this.updateMetaTag('og:description', config.description, true);
    this.updateMetaTag('og:url', url, true);
    this.updateMetaTag('og:image', image, true);
    this.updateMetaTag('og:type', type, true);
    this.updateMetaTag('og:site_name', this.siteName, true);

    // Update Twitter Card tags
    this.updateMetaTag('twitter:title', fullTitle);
    this.updateMetaTag('twitter:description', config.description);
    this.updateMetaTag('twitter:url', url);
    this.updateMetaTag('twitter:image', image);

    // Update canonical URL
    this.updateCanonicalUrl(url);
  }

  /**
   * Update or create a meta tag
   */
  private updateMetaTag(name: string, content: string, isProperty = false): void {
    const selector = isProperty ? `property='${name}'` : `name='${name}'`;
    const attribute = isProperty ? 'property' : 'name';
    
    if (this.meta.getTag(selector)) {
      this.meta.updateTag({ [attribute]: name, content });
    } else {
      this.meta.addTag({ [attribute]: name, content });
    }
  }

  /**
   * Update canonical URL
   */
  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    
    if (link) {
      link.setAttribute('href', url);
    } else {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      this.document.head.appendChild(link);
    }
  }

  /**
   * Set SEO for home/projects page
   */
  setHomeSeo(): void {
    this.updateSeoTags({
      title: 'Software Developer & IT Specialist | Midrand, South Africa',
      description: 'Zamokuhle Ndaba is an experienced Software Developer and IT Specialist based in Midrand, South Africa. Specializing in Angular, Next.js, Spring Boot, TypeScript, and cloud technologies. View my portfolio and projects.',
      keywords: 'Zamokuhle Ndaba, Zama Ndaba, Software Developer, IT Specialist, Midrand, South Africa, Angular Developer, Full Stack Developer, Web Developer, Portfolio',
      url: '/'
    });
  }

  /**
   * Set SEO for hackathon page
   */
  setHackathonSeo(): void {
    this.updateSeoTags({
      title: 'Hackathon Experience & Achievements',
      description: 'Explore Zamokuhle Ndaba\'s hackathon journey and achievements. See the projects built during various hackathon competitions and the technologies used.',
      keywords: 'Zamokuhle Ndaba hackathon, software developer hackathon, South Africa hackathon, coding competitions, IT hackathon',
      url: '/hackathon'
    });
  }
}
