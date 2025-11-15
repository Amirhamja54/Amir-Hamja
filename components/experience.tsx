'use client'

export default function Experience() {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform',
      challenge: 'Ranked on page 3 for high-value keywords with 300 monthly searches',
      approach: 'Technical SEO audit, content optimization, strategic link building',
      results: {
        traffic: '+280%',
        keywords: '45 keywords to position 1-3',
        timeframe: '4 months'
      },
      image: '/case-study-ecommerce.jpg'
    },
    {
      id: 2,
      title: 'SaaS Startup',
      challenge: 'Zero organic traffic, needed immediate visibility in competitive niche',
      approach: 'Competitor analysis, comprehensive content strategy, on-page optimization',
      results: {
        traffic: '+450%',
        keywords: '62 new rankings achieved',
        timeframe: '6 months'
      },
      image: '/case-study-saas.jpg'
    },
    {
      id: 3,
      title: 'Local Service Business',
      challenge: 'Lost rankings after Google algorithm update',
      approach: 'Manual recovery, content refresh, domain authority improvement',
      results: {
        traffic: '+320%',
        keywords: 'Regained 38 lost keywords',
        timeframe: '3 months'
      },
      image: '/case-study-local.jpg'
    }
  ]

  return (
    <section id="experience" className="py-20 md:py-32 border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Case Studies</h2>
        <p className="text-muted-foreground mb-16 max-w-2xl">Real results from real projects. See how I've helped businesses dominate search.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48 bg-secondary">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-8 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {study.title}
                </h3>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-accent font-semibold mb-2">Challenge</p>
                    <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <p className="text-accent font-semibold mb-2">Approach</p>
                    <p className="text-muted-foreground leading-relaxed">{study.approach}</p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-accent font-semibold mb-3">Results</p>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <p className="text-2xl font-bold text-accent">{study.results.traffic}</p>
                        <p className="text-xs text-muted-foreground">Traffic Increase</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-accent">{study.results.keywords}</p>
                        <p className="text-xs text-muted-foreground">Keywords Ranked</p>
                      </div>
                      <div>
                        <p className="text-base text-accent font-bold">{study.results.timeframe}</p>
                        <p className="text-xs text-muted-foreground">Timeframe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
