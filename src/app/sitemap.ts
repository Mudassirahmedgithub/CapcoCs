import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.capcocs.com'

  const routes = [
    '',

    // Main Pages
    '/about',
    '/contact',
    '/PrivacyPolicy',
    '/Terms',

    // AI Pages
    '/ai',
    '/ai/ai-agent-development',
    '/ai/ai-chatbot-development',
    '/ai/ai-consulting',
    '/ai/ai-development',
    '/ai/ai-integration',
    '/ai/ai-ocr',
    '/ai/computer-vision',
    '/ai/generative-ai',
    '/ai/generative-ai-consulting',
    '/ai/generative-ai-development',
    '/ai/machine-learning',

    // Products
    '/products',

    // Oracle Fusion Cloud
    '/products/oracle-fusion-cloud',
    '/products/oracle-fusion-cloud/ai-analytics-reporting',
    '/products/oracle-fusion-cloud/customer-experience-cx-',
    '/products/oracle-fusion-cloud/erp-implementation-integration',
    '/products/oracle-fusion-cloud/financial-management',
    '/products/oracle-fusion-cloud/human-capital-management-hcm-',
    '/products/oracle-fusion-cloud/project-performance-management',
    '/products/oracle-fusion-cloud/supply-chain-operations',

    // Oracle NetSuite ERP
    '/products/oracle-netsuite-erp',
    '/products/oracle-netsuite-erp/analytics-ai-insights',
    '/products/oracle-netsuite-erp/erp-implementation-support',
    '/products/oracle-netsuite-erp/financial-accounting-management',
    '/products/oracle-netsuite-erp/inventory-warehouse-supply-chain',
    '/products/oracle-netsuite-erp/multi-entity-business-management',
    '/products/oracle-netsuite-erp/order-production-management',
    '/products/oracle-netsuite-erp/project-management',

    // Services
    '/services',

    // Asset Management
    '/services/asset-management',
    '/services/asset-management/asset-financial-compliance-management',
    '/services/asset-management/asset-inspection',
    '/services/asset-management/asset-life-cycle-management',
    '/services/asset-management/asset-tracking',
    '/services/asset-management/asset-work-registry',
    '/services/asset-management/rfid-solutions',

    // Other Services
    '/services/business-management-consultancy',
    '/services/data-governance-ai',
    '/services/digital-marketing',
    '/services/it-consulting-support',
    '/services/software-development',

    // Warehouse Management
    '/services/warehouse-management',
    '/services/warehouse-management/inventory-management',
    '/services/warehouse-management/order-fulfillment',
    '/services/warehouse-management/stock-auditing-reporting',
    '/services/warehouse-management/warehouse-automation',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}