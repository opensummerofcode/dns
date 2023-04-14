// Providers:

var REG_NONE = NewRegistrar("none"); // No registrar.
var DSP_DIGITALOCEAN = NewDnsProvider("digitalocean");
var DSP_TRANSIP = NewDnsProvider("transip");

// Domains:

D(
  "osoc.be",

  REG_NONE,
  DnsProvider(DSP_DIGITALOCEAN),

  DefaultTTL(3600),

  A("@", "104.198.14.52"),
  CNAME("www", "osoc.be.", TTL(43200)),

  A("2011", "37.139.14.192"),
  A("2012", "37.139.14.192"),
  A("2013", "37.139.14.192"),
  A("2014", "37.139.14.192"),
  CNAME("2015", "osoc15.github.io.", TTL(43200)), // GitHub Pages
  CNAME("2016", "osoc16.github.io.", TTL(43200)), // GitHub Pages
  CNAME("2017", "osoc17.github.io.", TTL(43200)), // GitHub Pages
  CNAME("2018", "osoc18.github.io.", TTL(43200)), // GitHub Pages
  CNAME("2019", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2020", "redirect.openknowledge.be.", TTL(43200)),

  CNAME("help", "hosting.gitbook.com.", TTL(43200)),
  CNAME("selections", "osoc-selection.netlify.app.", TTL(43200)),
  CNAME("selection", "osoc-selection.netlify.app.", TTL(43200)),

  CNAME("status", "page.updown.io.", TTL(43200)),
  TXT("_updown.status", "updown-page=p/ysh0m"),

  // Fastmail - https://www.fastmail.help/hc/en-us/articles/1500000280261
  MX("@", 10, "in1-smtp.messagingengine.com."),
  MX("@", 20, "in2-smtp.messagingengine.com."),
  TXT("@", "v=spf1 include:spf.messagingengine.com include:_spf.google.com include:spf.protection.outlook.com ?all"),
  CNAME("fm1._domainkey", "fm1.osoc.be.dkim.fmhosted.com."),
  CNAME("fm2._domainkey", "fm2.osoc.be.dkim.fmhosted.com."),
  CNAME("fm3._domainkey", "fm3.osoc.be.dkim.fmhosted.com."),
  
  TXT("@", "google-site-verification=DPZt0TubKlpnBoeS379uL7w7QG5eviALnXhQRTF2TS8"),
  TXT("_github-challenge-osoc22-org", "eb1ed9ede8"),
  TXT("_github-challenge-osoc21-org", "ff9ba1ccbb"),
  TXT("_github-challenge-osoc20-org", "395e0c9ad8"),
  TXT("_github-challenge-opensummerofcode-org", "c3a84b2b80"),
  TXT("_github-pages-challenge-opensummerofcode", "d199c379417ca92a0d1e3eef15b6ec"),
  TXT("_github-pages-challenge-oSoc15.2015", "dad24f6c94cf0185af31fedd3c90c8"),
  TXT("_github-pages-challenge-osoc16.2016", "726de382b570e9239a4899f1272e16"),
  TXT("_github-pages-challenge-oSoc17.2017", "d0f1bfbd3d08a145671dfa4c71471b"),
  TXT("_github-pages-challenge-oSoc18.2018", "aa59f3ad2d1e59ed264c0c6e797144"),
  TXT("_vercel", "vc-domain-verify=pleasant-procedures.osoc.be,bb2ed95aab71d6163a58"),

  // Projects 2019
  A("api.cyclingup", "82.196.15.97"),
  A("cyclingup", "82.196.15.97"),
  A("cycling-up", "82.196.15.97"),

  // Projects 2021
  A("ldes", "178.128.242.87"),
  A("future-of-work", "167.71.72.187"),
  A("roadbase", "164.90.192.163"),
  CNAME("api.crowdy", "comparative-eyrie-hyskunkkeyy6pa2vm3l49atd.herokudns.com.", TTL(43200)),
  CNAME("crowdy", "closed-locust-t0qafbawjox1vvvo32wczzaw.herokudns.com.", TTL(43200)),
  CNAME("wepod", "osoc21.github.io.", TTL(43200)),

  // Projects 2022
  A("api.inspector-widget", "161.35.150.132"),
  CNAME("idlab", "seal-app-rgoxe.ondigitalocean.app.", TTL(1800)),
  CNAME("api.knowledge-impact", "the-impact-of-sharing-knowledge-5nvs7.ondigitalocean.app.", TTL(1800)),
  CNAME("paradar", "cname.vercel-dns.com.", TTL(43200)),
  CNAME("pleasant-procedures", "cname.vercel-dns.com.", TTL(43200))
);

D(
  "opensummerofcode.be",

  REG_NONE,
  DnsProvider(DSP_DIGITALOCEAN),

  DefaultTTL(3600),

  A("@", "188.166.35.76"),
  CNAME("www", "redirect.openknowledge.be.", TTL(43200)),

  CNAME("2011", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2012", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2013", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2014", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2015", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2016", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2017", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2018", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2019", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2020", "redirect.openknowledge.be.", TTL(43200))
);

D(
  "summerofcode.be",

  REG_NONE,
  DnsProvider(DSP_DIGITALOCEAN),

  DefaultTTL(3600),

  A("@", "188.166.35.76"),
  CNAME("www", "redirect.openknowledge.be.", TTL(43200)),

  A("ttl", "37.139.14.192"),

  CNAME("2011", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2012", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2013", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2014", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2015", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2016", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2017", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2018", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2019", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("2020", "redirect.openknowledge.be.", TTL(43200)),
  CNAME("open", "redirect.openknowledge.be.", TTL(43200))
);
