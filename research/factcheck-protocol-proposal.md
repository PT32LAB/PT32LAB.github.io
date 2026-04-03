# A Universal Fact-Checking Transparency Protocol for Websites

**Proposal: The `/factcheck` Standard**

*April 2026*

---

## 1. The Problem

We built a professional 50-page website in a single afternoon. Not a rough draft or a wireframe --- a polished, deployed, publicly accessible site with research pages, data visualizations, financial projections, team bios, and partnership claims. AI made this possible. AI also made it terrifying.

The barrier to creating a credible-looking website has collapsed to near zero. A convincing domain, clean typography, stock photography, and confident prose can be assembled in hours by anyone with access to a language model and a static site generator. The result is indistinguishable, at a glance, from the online presence of a legitimate organization that has spent years building a real track record. This is not a hypothetical concern. It is the current state of the web.

Readers have no standard way to verify what they are reading. When a site claims "our reforestation projects have restored 2,400 hectares," there is no mechanism to ask: says who? Based on what measurement? When was this last checked? The reader's only options are to trust the site, distrust it on instinct, or spend thirty minutes searching for corroboration that may not exist. Most people choose option one or two. Neither serves them.

The problem compounds with fine print. Disclaimers, qualifications, and terms of service are deliberately separated from the claims they modify. A headline says "guaranteed returns." A footnote three clicks away says "past performance does not guarantee future results." A product page says "clinically proven." A legal page says "these statements have not been evaluated by the FDA." The architecture of most websites is designed to maximize the distance between a bold claim and its quiet qualification. This is not an accident. It is a strategy.

The default relationship between a website and its visitor is "trust us." But trust is broken. It was broken by fake news sites that mimicked real journalism. It was broken by crypto projects with fabricated team pages. It was broken by health supplement sites citing studies that do not exist. It was broken long before AI arrived. AI simply industrialized the production of unverifiable claims.

And there is a subtler problem beneath the obvious one. Most websites mix three fundamentally different types of statements without distinguishing between them: facts (verifiable claims about the world), opinions (subjective judgments and interpretations), and projections (forward-looking statements about what might happen). A site might say "Bolivia has 10 million hectares of degraded land" (fact), "this represents the greatest reforestation opportunity in South America" (opinion), and "our projects will generate $50M in carbon credits by 2030" (projection). All three appear in the same paragraph, in the same font, with the same confidence. The reader has no way to know which is which without already knowing the subject.

The web has standards for security (HTTPS), for crawler access (robots.txt), for content structure (schema.org), and for privacy (cookie consent banners, however badly implemented). It has no standard for trust. No standard that says: here are our claims, here are our sources, and here is how confident we are in each one.

This proposal describes one.

---

## 2. The Proposal

Every website that makes factual claims should publish a `/factcheck` page.

The concept is simple. Just as `robots.txt` tells search engines how to crawl a site, and a privacy policy tells users how their data is handled, a fact-check page tells readers --- and machines --- what the site claims, where those claims come from, and how confident the site is in each one.

This is self-declaration, not third-party verification. The site publishes its own review of its own claims. That may sound pointless at first. Why would a dishonest site fact-check itself honestly? But the value is not in the check itself --- it is in the act of declaration. A site that publishes a fact-check page is making a public, auditable commitment to specific claims and specific sources. If those sources turn out to be fabricated, or those claims turn out to be false, the declaration itself becomes evidence of intent. A site that declines to publish any fact-check page is making a different kind of statement.

The page has two components: a human-readable page at `/factcheck` (or `/transparency` or `/claims`) and a machine-readable file at `/factcheck.json`. The human page is for visitors who want to check claims. The JSON file is for search engines, AI systems, browser extensions, and automated verification tools.

Every factual claim on the site is listed with its source, its verification status, the date it was last checked, and the identity of the person or system that checked it. Projections are explicitly labeled as projections. Opinions are explicitly labeled as opinions. Qualifications and disclaimers are placed directly next to the claims they modify, not buried in a separate legal page.

The page is versioned, ideally through git. Every change to a claim, a source, or a status is recorded with a timestamp and an author. This means anyone can see not just what the site claims today, but what it claimed last month, and when it changed its mind. This is the accountability mechanism. You cannot quietly edit a projection from "$50M by 2030" to "$12M by 2035" without the change appearing in the version history.

There is no central authority. No organization approves or rejects fact-check pages. No certification is required. The protocol is open, voluntary, and self-administered. Its power comes not from enforcement but from adoption --- the same way HTTPS went from optional to expected not because a law required it, but because browsers started showing "Not Secure" warnings for sites that did not use it.

---

## 3. Technical Specification

The protocol defines two files: a machine-readable JSON document and a human-readable page.

**Machine-readable: `/factcheck.json`**

The JSON file uses the [ClaimReview](https://schema.org/ClaimReview) schema from schema.org, extended with additional fields for transparency metadata. This is not a new schema --- ClaimReview is already recognized by Google, Bing, and other search engines for fact-checking markup. The protocol standardizes its use for self-declaration.

Each entry in the file represents one factual claim. The required fields are:

- `claimText`: The exact text of the claim as it appears on the site.
- `pageUrl`: The URL of the page where the claim appears.
- `sourceUrl`: A URL to the primary source supporting the claim. If no external source exists, this field must say `"self-reported"`.
- `status`: One of five values (described below).
- `dateChecked`: ISO 8601 date of the most recent verification.
- `checkerIdentity`: The name and role of the person or system that performed the check.

Optional fields include:

- `confidenceScore`: A value from 0.0 to 1.0 representing the checker's confidence.
- `relatedClaims`: An array of IDs linking to related claims elsewhere in the file.
- `disputeLog`: An array of dated entries recording any challenges to the claim and how they were resolved.
- `qualifications`: Disclaimers or caveats that apply to this specific claim, forced to appear alongside it rather than in a separate legal document.

**Status values:**

| Status | Meaning |
|---|---|
| `VERIFIED` | Confirmed by an independent, authoritative source (peer-reviewed study, government data, direct measurement). |
| `SUPPORTED` | Consistent with available evidence but not independently confirmed. |
| `QUALIFIED` | True with caveats or conditions that significantly affect interpretation. |
| `UNVERIFIED` | No verification attempted or no source available. |
| `DISPUTED` | Actively contested by credible counter-evidence. |

**Claim types:**

Each claim must also declare its `claimType`: `FACT`, `OPINION`, or `PROJECTION`. This forces the site to categorize every statement, making it impossible to present a projection with the same implied authority as a verified fact.

**Human-readable: `/factcheck`**

The human-readable page renders the same data in a format designed for visitors. Claims are grouped by page, each showing its text, source link, status badge, and any qualifications. The page should include:

- A summary of total claims by status (e.g., "34 claims: 18 verified, 9 supported, 4 qualified, 2 unverified, 1 disputed").
- A "last updated" timestamp.
- A link to the version history (git log or equivalent).
- A methodology section explaining how claims are checked.

**Versioning:**

The `/factcheck.json` file should be tracked in version control. Git is the recommended system, but any versioning mechanism that provides immutable, timestamped history is acceptable. The human-readable page should link to the version history so visitors can see how claims have changed over time.

**Discovery:**

Sites should advertise the protocol via a `<link>` tag in the HTML head: `<link rel="factcheck" href="/factcheck.json" />`. This allows automated tools to discover the file without guessing at paths.

---

## 4. Implementation Guide

Adding the protocol to an existing website is straightforward regardless of the technology stack.

**Static sites (Hugo, Astro, Jekyll, plain HTML):** Create a `factcheck.json` file in the public root directory and a `/factcheck` page using the site's existing templating system. The JSON file is written by hand or generated from a structured data source. For a small site with 20-50 claims, the initial audit takes two to four hours. We built ours in a single working session.

**CMS platforms (WordPress, Ghost, Strapi):** The JSON file can be served as a static asset or generated dynamically from a custom post type or database table. A plugin could provide a claims management interface where editors tag claims as they write content. The human-readable page is a standard template.

**Single-page applications (React, Vue, Next.js):** The JSON file is placed in the public directory. The `/factcheck` route renders a component that reads and displays the JSON data. For server-rendered apps, the page can be statically generated at build time for SEO.

**Automation potential:** The most time-consuming part of the process is the initial claim audit --- reading through the site, identifying factual claims, and finding sources. This is precisely the kind of task that AI can assist with. A language model can scan page content, extract statements that appear to be factual claims, suggest sources, and draft entries for the JSON file. The human reviewer then confirms, corrects, or rejects each entry. Several tools could be built to automate this: a CLI that crawls a site and outputs a draft `factcheck.json`, a browser extension that highlights claims and lets editors annotate them in place, or a CMS plugin that prompts authors to cite sources as they write.

**Maintenance:** The fact-check page is not a one-time effort. Claims change as new data becomes available. Projections expire. Sources go offline. A reasonable maintenance cadence is to review the file whenever site content is updated, and to do a full audit quarterly. The version history provides accountability even if maintenance lapses --- visitors can see when the last check occurred and draw their own conclusions.

**Cost:** The cost of implementing this protocol is minimal. The JSON file is a few kilobytes. The human-readable page is a single template. The real cost is editorial attention --- the time spent identifying claims and finding sources. For sites that have already done this work internally (as any responsible organization should have), the protocol simply makes it public.

---

## 5. Why Adopt Voluntarily

The protocol is voluntary. No law requires it. No browser enforces it. So why would any site adopt it?

**SEO advantage.** Search engines already use ClaimReview markup to generate rich snippets for fact-check articles. A site that publishes structured claim data in a recognized schema gives search engines more to work with. As search algorithms increasingly prioritize trustworthy content (Google's E-E-A-T framework already rewards expertise, experience, authoritativeness, and trustworthiness), sites with transparent sourcing will have a structural advantage over those without it.

**Trust signal.** In markets where trust is the product --- financial services, healthcare, nonprofit fundraising, legal services --- a public fact-check page is a concrete demonstration that the organization has done its homework. It is the difference between saying "trust us" and saying "here is exactly what we claim, here is where we got it, and here is how confident we are." The second statement is stronger precisely because it is falsifiable.

**Liability reduction.** Organizations already write disclaimers to manage legal risk. The problem is that disclaimers are typically separated from the claims they qualify. A fact-check page solves this by placing qualifications directly next to claims. If a projection fails to materialize, the organization can point to a public, timestamped document that clearly labeled it as a projection with stated confidence and caveats. This is stronger legal protection than a buried footnote.

**AI consumption.** Large language models are increasingly used to answer questions about organizations, products, and services. When an LLM encounters a site with structured claim data, it can provide more accurate, more nuanced answers --- and attribute them properly. Sites without structured claims are at the mercy of whatever the model infers from unstructured text. A `factcheck.json` file is, in effect, a way to tell AI systems: "Here is what we actually claim, and here is how confident you should be in each statement."

**The fine print problem, solved.** The protocol's requirement that qualifications appear next to the claims they modify eliminates the most common form of legal deception on the web: the bold claim on page one and the quiet disclaimer on page seven. This is not just an ethical improvement. It is a practical one. Users who understand the limitations of a claim upfront are less likely to feel deceived later, which means fewer complaints, fewer refund requests, and fewer regulatory problems.

---

## 6. The Bigger Picture

HTTPS was optional once. In 2014, only 30% of web traffic was encrypted. Then browsers started showing warnings. Google started using HTTPS as a ranking signal. Let's Encrypt made certificates free. By 2023, over 95% of web traffic was encrypted. No law mandated this. The transition happened because the ecosystem aligned incentives: browsers, search engines, and certificate authorities all pushed in the same direction, and the cost of compliance dropped to zero.

The same trajectory is available for transparency. Today, publishing a fact-check page is unusual. Tomorrow, it could be expected. The mechanism is the same: search engines prioritize sites with structured claim data. Browsers or extensions display trust indicators. AI systems give better answers about transparent sites. The cost of adoption is low. The cost of non-adoption rises gradually until the default flips from "most sites don't have this" to "why doesn't this site have this?"

This matters because the AI content problem cannot be solved after publication. You cannot reliably detect AI-generated text. You cannot reliably detect fabricated sources. You cannot build a filter that catches every plausible-sounding lie. The solution has to work at the infrastructure level, the same way HTTPS solved the eavesdropping problem not by inspecting every packet but by encrypting the channel.

The fact-check protocol does not prevent anyone from lying. A dishonest site can publish a fact-check page full of fabricated sources. But it raises the cost of deception in two ways. First, it creates a public, versioned record of specific claims and specific sources. Fabricated sources can be checked. Changed claims can be tracked. The declaration itself becomes a liability for liars. Second, it creates a visible absence. A site without a fact-check page is like a site without HTTPS --- it might be fine, but the lack of a standard trust signal is itself a signal.

This is not censorship. No one decides what counts as true. The protocol does not require third-party approval. It does not rate claims as true or false. It asks sites to show their work --- to declare what they claim, where they got it, and how confident they are. The judgment remains with the reader. The protocol simply ensures the reader has something to judge.

The web was built without a trust layer. We have layers for addressing (DNS), for transport (TCP/IP), for security (TLS), for content (HTML), and for discoverability (search engines and `robots.txt`). We do not have a layer that says: here is what this site asserts about the world, and here is the basis for those assertions. The `/factcheck` protocol is a proposal to build that layer --- not through regulation or central authority, but through a simple, open standard that any site can adopt and any tool can read.

The question is not whether the web needs a trust layer. The question is whether we build it deliberately or let it emerge from whatever ad hoc measures platforms impose on their own terms. A voluntary, open, self-declaration standard is the better path. It preserves the web's openness. It respects the autonomy of publishers. And it gives readers, search engines, and AI systems the one thing they currently lack: a structured, auditable answer to the question "why should I believe this?"

---

*This proposal was developed by PT32 Lab as part of our own transparency implementation. Our `/factcheck` page is live. Yours can be too.*
