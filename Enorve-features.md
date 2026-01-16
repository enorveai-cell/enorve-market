

---

# Enorve - Complete Feature Documentation

## Overview

**Enorve** is an AI-powered customer support platform that unifies multi-channel communication, intelligent automation, and team collaboration into a single, enterprise-grade solution. It's designed for businesses that need to manage customer conversations at scale while leveraging AI to improve efficiency and response quality.

---

## 1. Multi-Channel Inbox (Conversations)

The core of Enorve is a unified inbox that aggregates customer communications from multiple channels into one interface.

### Supported Channels
| Channel | Description | Connection Method |
|---------|-------------|-------------------|
| **Live Chat (Webchat)** | Embeddable chat widget for websites | Widget configuration in Settings |
| **WhatsApp** | Business WhatsApp integration | OAuth connection |
| **Instagram** | Instagram Direct Messages | OAuth connection |
| **LinkedIn** | LinkedIn messaging | OAuth connection |
| **Email** | Email forwarding via webhook | Domain configuration + webhook |
| **Slack** | Internal team notifications | OAuth connection |

### Inbox Features
- **Real-time updates**: New conversations and messages appear instantly via Supabase realtime subscriptions
- **Conversation search**: Full-text search with debounce
- **Advanced filtering**: Filter by channel, status, priority, assignment, date range, unread only
- **Saved views**: Create and save custom filter combinations
- **Pinning**: Pin important conversations to the top
- **Sorting**: Sort by newest, oldest, priority, or last activity
- **Bulk actions**: Select multiple conversations for batch operations (resolve, assign, tag)
- **Collision detection**: Shows when another agent is viewing the same conversation
- **SLA breach notifications**: Real-time alerts for conversations approaching SLA limits
- **Keyboard shortcuts**: Power-user navigation (Cmd+K for command palette)

### Conversation Panel
- **Three-column layout**: Conversation list | Message thread | Customer/Copilot panel
- **Density control**: Comfortable, compact, or dense message display
- **Message composer**: Rich text input with template insertion
- **Status management**: Open, needs_human, resolved, closed
- **Priority setting**: Urgent, high, normal, low
- **Assignment**: Assign to specific agents or teams
- **Tags**: Apply tags for categorization

---

## 2. AI Copilot (Agent Assist)

The AI Copilot provides real-time intelligence and suggestions to agents while handling conversations.

### Features (Plan-Gated: Professional+)

#### Assist Mode
- **Response suggestions**: AI-generated reply drafts based on conversation context
- **Tone tips**: Recommended communication tone with analysis of customer sentiment
- **Quick actions**: One-click actions like apply tags, set priority, escalate

#### Context Mode
- **Conversation summary**: AI-generated summary of the entire conversation
- **Customer snapshot**: Key customer details, history, and goals
- **Sentiment analysis**: Real-time sentiment tracking (positive, neutral, negative, frustrated)
- **Intent detection**: Automatic classification (billing, technical, refund, escalation, etc.)
- **Escalation recommendations**: AI signals when human intervention is needed

### AI Copilot Metrics
- Confidence scores for suggestions
- Usage analytics (suggestions accepted, modified, ignored)
- Response time improvements tracking

---

## 3. AI Auto-Resolution

Automatically resolves conversations when AI provides high-confidence responses.

### Configuration Options
- **Enable/disable toggle**: Master switch for auto-resolution
- **Confidence threshold**: Set minimum confidence (e.g., 75%) for auto-close
- **Excluded categories**: Define ticket categories that should never auto-resolve
- **Cooldown period**: Time delay before marking as resolved

### How It Works
1. AI analyzes conversation and generates response
2. If confidence exceeds threshold AND category allows
3. Conversation status changes to "resolved"
4. Customer receives resolution message
5. Metric tracked for AI resolution rate

---

## 4. AI Auto-Escalation

Automatically routes low-confidence or negative sentiment conversations to human agents.

### Triggers
- AI confidence falls below threshold (configurable, default 70%)
- Negative sentiment detected
- Specific keywords or intents detected
- Customer explicitly requests human agent
- Multiple failed resolution attempts

### Escalation Actions
- Status changed to "needs_human"
- Priority automatically elevated
- Assigned to available agent or team
- Notification sent to agents
- SLA timer starts

---

## 5. Knowledge Base

The knowledge base powers AI responses and provides self-service documentation.

### Knowledge Articles
- **Rich text editor**: Full formatting with links, lists, headers
- **Categories**: Organize articles by topic
- **Freshness tracking**: Badges showing recently updated content
- **Impact scoring**: AI tracks which articles resolve the most conversations
- **Search**: Full-text search across all knowledge content
- **Export**: CSV export of all articles

### Knowledge Sources
- **Website crawler**: Automatically crawl and index website pages
- **File upload**: Upload documents (PDF, Word, etc.)
- **Paste content**: Direct content input
- **Sync scheduling**: Automatic re-crawling at intervals
- **Source management**: Enable/disable sources, view document counts

### AI Suggestions (Manager+)
- AI identifies gaps in knowledge base
- Suggests new articles based on unanswered questions
- Recommends updates to existing articles
- Review and approve workflow

---

## 6. Ticketing System

Formal issue tracking for complex cases that require follow-up.

### Ticket Properties
- **Ticket number**: Auto-generated unique identifier
- **Title and description**: Detailed issue information
- **Status**: Open, in_progress, waiting_on_customer, resolved, closed
- **Priority**: Urgent, high, normal, low
- **Category**: Refund, technical, verification, billing, escalation, general
- **Due date**: SLA-driven or manual
- **Assignee**: Specific agent

### Ticket Features
- **Create from conversation**: Convert any conversation to a ticket
- **AI ticket suggestions**: AI analyzes conversations and recommends ticket creation
- **Bulk operations**: Multi-select for batch status/priority/assignment changes
- **Filtering**: By status, priority, category, assignee, SLA status
- **SLA tracking**: Visual indicators for due today, at risk, overdue
- **Pagination**: Handle large ticket volumes efficiently
- **Export**: CSV export of selected tickets

---

## 7. Workflow Automation (Business+)

Visual workflow builder for automating repetitive tasks.

### Trigger Types
- **New conversation**: When a conversation is created
- **New message**: When a message is received
- **Status change**: When conversation status changes
- **SLA breach**: When SLA is about to breach or has breached

### Condition Steps
- Match by channel, sentiment, intent, keywords
- Multiple conditions with AND/OR logic
- Configure actions when conditions are not met

### Action Steps
- **Auto-reply**: Send templated response with optional delay
- **Route**: Assign to team or agent
- **Tag**: Apply or remove tags
- **Priority**: Set conversation priority
- **Escalate**: Trigger escalation workflow

### Workflow Management
- **Templates**: Pre-built workflow templates
- **Enable/disable**: Toggle workflows on/off
- **Execution tracking**: View execution counts and history
- **Analytics**: Workflow performance dashboard
- **Duplicate**: Clone existing workflows

---

## 8. Auto-Tag Rules

Automatic conversation categorization based on rules.

### Rule Conditions
- Channel type (WhatsApp, email, webchat, etc.)
- Detected intent
- Sentiment analysis
- Keyword matching
- Customer segment

### Actions
- Apply tags automatically
- Set priority
- Trigger workflows
- Route to teams

### Statistics
- Trigger count per rule
- Last triggered timestamp
- Enable/disable toggle

---

## 9. Customer Management

Unified customer profiles with conversation history and intelligence.

### Customer Profile
- **Contact info**: Name, email, phone, company
- **Lifecycle stage**: Lead, active, at risk, churned, VIP
- **Tags**: Custom categorization
- **Segments**: Group customers by criteria
- **Lifetime value**: Order-based LTV tracking
- **First seen / Last active**: Timeline tracking

### Customer Intelligence
- **Case classification**: Sales opportunity, support case, general inquiry
- **Intent signals**: Buying intent, support need detection
- **Conversation history**: Full history with search
- **Shopify orders**: Order lookup for e-commerce (with Shopify integration)

### Customer Views
- **Filters**: By lifecycle stage, tags, segments, LTV range
- **Sorting**: By activity, name, conversations, LTV
- **Intent filter**: Focus on sales opportunities
- **Bulk operations**: Mass update lifecycle, tags, segments
- **Export**: CSV export

---

## 10. Analytics Dashboard

Comprehensive metrics and reporting for operations.

### Real-Time Metrics
- Active conversations count
- Messages in last hour
- Average response time (last 10 messages)

### Key Metrics
- Total conversations / messages
- AI vs agent message split
- Auto-resolve rate
- Average response time
- Average resolution time
- CSAT score and distribution
- Channel distribution

### Charts and Visualizations
- Message volume over time (7 days)
- Channel distribution pie chart
- AI vs Human message trends
- Hourly message patterns
- CSAT trends

### Specialized Analytics
- **AI Performance**: Copilot usage, suggestion acceptance rates
- **Knowledge Gaps**: Unanswered questions analysis
- **Agent Performance**: Per-agent metrics
- **Ticket Metrics**: Resolution times, category distribution

---

## 11. Team Management

### Team Members
- **Invite users**: Email invitations with role assignment
- **Roles**: Super Admin, Admin, Manager, Agent
- **Skills management**: Agents can set their expertise areas
- **Working hours**: Configure availability schedules

### Performance Tracking
- Messages sent
- Conversations handled
- Resolution rate
- CSAT scores
- Average response time
- Revenue attribution (with Shopify)

### Permissions
- Role-based access control
- Feature gating by plan
- Permission matrix configuration

---

## 12. Integrations

### Native Integrations (AI-Powered)
These integrations allow AI to fetch data and take actions:

| Integration | Features | Plan |
|-------------|----------|------|
| **Shopify** | Order lookup, customer history, revenue attribution | Business+ (Early Access) |
| **Slack** | Team notifications, escalation alerts | All plans |

### Third-Party Integrations
| Integration | Features | Plan |
|-------------|----------|------|
| **HubSpot** | CRM sync, contact enrichment | Business+ |
| **Zapier** | 5000+ app connections via webhooks | Professional+ |

### Integration Features
- OAuth-based connection
- Health monitoring
- Last sync timestamp
- Disconnect capability
- Global kill switch for Shopify

---

## 13. Live Chat Widget

Embeddable chat widget for websites.

### Widget Configuration
- **Custom branding**: Colors, logo, position
- **Welcome message**: Configurable greeting
- **Pre-chat form**: Collect customer info before chat
- **Offline mode**: Show different UI when agents unavailable
- **Multiple widgets**: Different widgets for different sites/pages

### Operating Hours
- Configure business hours by day
- Timezone settings
- Auto-offline outside hours

### AI Behavior Settings
- Enable/disable AI responses for widget
- Configure AI personality
- Set fallback responses

### Escalation Settings
- Configure when to escalate to human
- Set wait time before escalation option appears

---

## 14. Governance & Policies

Enterprise controls for AI and automation behavior.

### Governance Policies
- Define rules for when AI actions are allowed, blocked, or require approval
- Policy conditions based on conversation attributes
- Approval workflows for high-risk actions

### AI Safety Settings
- Guardrails for AI responses
- Blocked topics/phrases
- Tone guidelines
- Response length limits

### AI Identity
- Configure AI assistant name
- Set personality traits
- Define response style

---

## 15. SLA Management

Service Level Agreement tracking and enforcement.

### SLA Configuration
- **First response time**: Target time for initial reply
- **Resolution time**: Target time for full resolution
- **By priority**: Different SLAs per priority level
- **Business hours**: Calculate against working hours only

### SLA Monitoring
- Real-time SLA status widget
- Breach notifications
- At-risk early warnings
- Dashboard metrics

---

## 16. Templates

Quick response templates for common scenarios.

### Template Features
- Create reusable message templates
- Category organization
- Variable placeholders (customer name, order number, etc.)
- Quick insert in composer
- Search templates

---

## 17. Audit Logs (Enterprise)

Complete activity tracking for compliance.

### Logged Events
- User logins/logouts
- Settings changes
- Data exports
- Integration connections/disconnections
- Conversation actions
- User management actions

### Audit Features
- Searchable logs
- Date range filtering
- Export capability

---

## 18. Security Features

### Authentication
- Email/password login
- Multi-factor authentication (MFA/2FA)
- Password reset flow
- Email verification

### Enterprise Security (Enterprise Plan)
- **SSO/SAML**: Single sign-on integration
- **IP Whitelist**: Restrict access by IP address
- **Session management**: Active session controls

---

## 19. Billing & Plans

### Plan Tiers

| Feature/Limit | Starter ($29/mo) | Professional ($79/mo) | Business ($199/mo) | Enterprise ($499/mo) |
|---------------|------------------|----------------------|--------------------|--------------------|
| Users | 3 | 10 | 50 | Unlimited |
| Messages/mo | 10,000 | 50,000 | 200,000 | 1,000,000 |
| AI Messages/mo | 1,000 | 5,000 | 20,000 | 100,000 |
| Storage | 5 GB | 25 GB | 100 GB | 500 GB |
| Channels | 2 | 5 | 15 | Unlimited |
| Knowledge Articles | 50 | 200 | 1,000 | Unlimited |

### Feature Availability
- **Starter**: Basic ticketing, email, live chat
- **Professional**: + AI Copilot, AI Chat, WhatsApp, Instagram, Advanced Analytics
- **Business**: + AI Auto-Resolution, Workflow Automation, Custom Branding
- **Enterprise**: + Custom Integrations, Advanced AI, SSO, Audit Logs

### Billing Features
- Usage tracking with quota warnings (70%, 90%, 100%)
- Plan upgrade prompts
- Credit card management
- Invoice history

---

## 20. Public Pages

### Status Page (`/status`)
- Uptime commitment (99.9% target)
- Planned maintenance windows
- Incident response (24-hour acknowledgment)
- Contact information

### Privacy Policy (`/privacy-policy`)
- Data handling practices
- Cookie usage
- User rights

---

## Technical Architecture

### Frontend
- React 18 with TypeScript
- Vite build system
- Tailwind CSS with custom design tokens
- Radix UI primitives
- TanStack Query for data fetching
- React Router for navigation
- Recharts for visualizations

### Backend
- Supabase (PostgreSQL database)
- Supabase Edge Functions (Deno runtime)
- Supabase Realtime for live updates
- Row Level Security (RLS) for data protection

### AI Infrastructure
- Edge functions for AI processing
- Confidence scoring system
- Fail-closed for billing-critical features
- Feature flags for gradual rollout

---

This comprehensive feature set makes Enorve a complete solution for modern customer support teams, combining the efficiency of AI with the reliability of enterprise-grade infrastructure.
