// This file defines the database schema for the expanded platform
// It uses Drizzle ORM for type safety and migrations

import { pgTable, uuid, text, timestamp, boolean, integer, json, decimal, date, pgEnum } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

// ==========================================
// EXISTING TABLES (PRESERVED & ENHANCED)
// ==========================================

// Team Members (existing)
export const teamMembers = pgTable("team_members", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  bio: text("bio").notNull(),
  image: text("image"),
  email: text("email"),
  phone: text("phone"),
  linkedin: text("linkedin"),
  twitter: text("twitter"),
  github: text("github"),
  department: text("department"),
  sortOrder: integer("sort_order"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  isActive: boolean("is_active").default(true),
  isFeatured: boolean("is_featured").default(false),
  // New fields for platform
  userId: text("user_id"), // Link to auth system
  role: text("role").default("staff"),
})

// Articles (existing)
export const articles = pgTable("articles", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  publishedDate: text("published_date").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content"),
  authorId: uuid("author").references(() => teamMembers.id),
  tags: text("tags").array(),
  isFeatured: boolean("is_featured").default(false).notNull(),
  readTime: integer("read_time"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  isPublished: boolean("is_published").default(false),
})

// Blog (existing)
export const blog = pgTable("blog", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  publishedDate: text("published_date").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content"),
  authorId: uuid("author").references(() => teamMembers.id),
  tags: text("tags").array(),
  isFeatured: boolean("is_featured").default(false).notNull(),
  readTime: integer("read_time"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  isPublished: boolean("is_published").default(false).notNull(),
})

// Form Submissions (existing)
export const formTypeEnum = pgEnum("form_type", ["contact", "agency", "quote"])
export const statusEnum = pgEnum("status", ["new", "contacted", "in_progress", "closed"])

export const formSubmissions = pgTable("form_submissions", {
  id: uuid("id").defaultRandom().primaryKey(),
  formType: formTypeEnum("form_type").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  message: text("message").notNull(),
  referralSource: text("referral_source"),
  budget: text("budget"),
  timeframe: text("timeframe"),
  consent: boolean("consent").notNull(),
  status: statusEnum("status").default("new").notNull(),
  assignedToId: uuid("assigned_to").references(() => teamMembers.id),
  notes: text("notes"),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  serviceInterestedIn: text("service_interested_in"),
  // New fields for CRM integration
  convertedToLeadId: uuid("converted_to_lead"),
})

// Testimonials (existing)
export const testimonials = pgTable("testimonials", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  content: text("content").notNull(),
  image: text("image"),
  company: text("company"),
  position: text("position"),
  rating: integer("rating"),
  date: text("date"),
  isFeatured: boolean("is_featured").default(false),
  sortOrder: integer("sort_order"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  isPublished: boolean("is_published").default(true),
})

// ==========================================
// CRM MODULE TABLES
// ==========================================

// CRM Contacts
export const crmContacts = pgTable("crm_contacts", {
  id: uuid("id").defaultRandom().primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  position: text("position"),
  source: text("source"),
  notes: text("notes"),
  assignedToId: uuid("assigned_to").references(() => teamMembers.id),
  status: text("status").default("active"),
  lastContactedAt: timestamp("last_contacted_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  // Custom fields
  customFields: json("custom_fields"),
  // Tracking
  formSubmissionId: uuid("form_submission_id").references(() => formSubmissions.id),
  tags: text("tags").array(),
})

// Deal Stages
export const dealStageEnum = pgEnum("deal_stage", ["new", "qualified", "proposal", "negotiation", "won", "lost"])

// CRM Deals
export const crmDeals = pgTable("crm_deals", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  contactId: uuid("contact_id").references(() => crmContacts.id),
  value: decimal("value", { precision: 10, scale: 2 }),
  currency: text("currency").default("USD"),
  stage: dealStageEnum("stage").default("new"),
  probability: integer("probability").default(0),
  expectedCloseDate: date("expected_close_date"),
  actualCloseDate: date("actual_close_date"),
  assignedToId: uuid("assigned_to").references(() => teamMembers.id),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  // Products/services
  products: json("products"),
  // Custom fields
  customFields: json("custom_fields"),
})

// CRM Tasks
export const taskPriorityEnum = pgEnum("task_priority", ["low", "medium", "high", "urgent"])
export const taskStatusEnum = pgEnum("task_status", ["pending", "in_progress", "completed", "cancelled"])

export const crmTasks = pgTable("crm_tasks", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  dueDate: timestamp("due_date"),
  priority: taskPriorityEnum("priority").default("medium"),
  status: taskStatusEnum("task_status").default("pending"),
  assignedToId: uuid("assigned_to").references(() => teamMembers.id),
  createdById: uuid("created_by").references(() => teamMembers.id),
  contactId: uuid("contact_id").references(() => crmContacts.id),
  dealId: uuid("deal_id").references(() => crmDeals.id),
  reminderAt: timestamp("reminder_at"),
  completedAt: timestamp("completed_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// CRM Activities
export const activityTypeEnum = pgEnum("activity_type", ["email", "call", "meeting", "note", "task", "other"])

export const crmActivities = pgTable("crm_activities", {
  id: uuid("id").defaultRandom().primaryKey(),
  type: activityTypeEnum("type").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  contactId: uuid("contact_id").references(() => crmContacts.id),
  dealId: uuid("deal_id").references(() => crmDeals.id),
  performedById: uuid("performed_by").references(() => teamMembers.id),
  scheduledAt: timestamp("scheduled_at"),
  completedAt: timestamp("completed_at"),
  outcome: text("outcome"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// ==========================================
// LMS MODULE TABLES
// ==========================================

// Course Categories
export const courseCategories = pgTable("course_categories", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  image: text("image"),
  parentId: uuid("parent_id").references(() => courseCategories.id),
  sortOrder: integer("sort_order"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Course Status
export const courseStatusEnum = pgEnum("course_status", ["draft", "published", "archived"])

// Courses
export const courses = pgTable("courses", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  shortDescription: text("short_description"),
  thumbnail: text("thumbnail"),
  status: courseStatusEnum("status").default("draft"),
  price: decimal("price", { precision: 10, scale: 2 }).default("0"),
  currency: text("currency").default("USD"),
  isFeatured: boolean("is_featured").default(false),
  isPublic: boolean("is_public").default(false),
  enrollmentLimit: integer("enrollment_limit"),
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),
  categoryId: uuid("category_id").references(() => courseCategories.id),
  instructorId: uuid("instructor_id").references(() => teamMembers.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  // SEO and metadata
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  // Requirements and outcomes
  requirements: text("requirements").array(),
  outcomes: text("outcomes").array(),
  // Additional info
  duration: text("duration"),
  level: text("level"),
  tags: text("tags").array(),
})

// Course Sections
export const courseSections = pgTable("course_sections", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  courseId: uuid("course_id")
    .references(() => courses.id)
    .notNull(),
  sortOrder: integer("sort_order").notNull(),
  isPublished: boolean("is_published").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Lesson Types
export const lessonTypeEnum = pgEnum("lesson_type", ["video", "text", "quiz", "assignment", "discussion", "resource"])

// Course Lessons
export const courseLessons = pgTable("course_lessons", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  content: text("content"),
  type: lessonTypeEnum("type").default("text"),
  sectionId: uuid("section_id")
    .references(() => courseSections.id)
    .notNull(),
  courseId: uuid("course_id")
    .references(() => courses.id)
    .notNull(),
  sortOrder: integer("sort_order").notNull(),
  duration: integer("duration"), // in minutes
  isPublished: boolean("is_published").default(false),
  isFree: boolean("is_free").default(false),
  videoUrl: text("video_url"),
  attachments: json("attachments"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Course Enrollments
export const enrollmentStatusEnum = pgEnum("enrollment_status", ["active", "completed", "cancelled", "expired"])

export const courseEnrollments = pgTable("course_enrollments", {
  id: uuid("id").defaultRandom().primaryKey(),
  courseId: uuid("course_id")
    .references(() => courses.id)
    .notNull(),
  userId: text("user_id").notNull(), // Clerk user ID
  status: enrollmentStatusEnum("status").default("active"),
  enrolledAt: timestamp("enrolled_at").defaultNow(),
  completedAt: timestamp("completed_at"),
  expiresAt: timestamp("expires_at"),
  progress: integer("progress").default(0),
  lastAccessedAt: timestamp("last_accessed_at"),
  certificateIssued: boolean("certificate_issued").default(false),
  paymentId: text("payment_id"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Lesson Progress
export const lessonProgress = pgTable("lesson_progress", {
  id: uuid("id").defaultRandom().primaryKey(),
  lessonId: uuid("lesson_id")
    .references(() => courseLessons.id)
    .notNull(),
  userId: text("user_id").notNull(), // Clerk user ID
  enrollmentId: uuid("enrollment_id")
    .references(() => courseEnrollments.id)
    .notNull(),
  status: text("status").default("not_started"),
  progress: integer("progress").default(0),
  startedAt: timestamp("started_at"),
  completedAt: timestamp("completed_at"),
  timeSpent: integer("time_spent"), // in seconds
  lastAccessedAt: timestamp("last_accessed_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// ==========================================
// COMMUNITY MODULE TABLES
// ==========================================

// Community Groups
export const communityGroups = pgTable("community_groups", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  image: text("image"),
  isPrivate: boolean("is_private").default(false),
  ownerId: text("owner_id").notNull(), // Clerk user ID
  memberCount: integer("member_count").default(0),
  rules: text("rules"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Group Memberships
export const memberRoleEnum = pgEnum("member_role", ["member", "moderator", "admin"])

export const groupMemberships = pgTable("group_memberships", {
  id: uuid("id").defaultRandom().primaryKey(),
  groupId: uuid("group_id")
    .references(() => communityGroups.id)
    .notNull(),
  userId: text("user_id").notNull(), // Clerk user ID
  role: memberRoleEnum("role").default("member"),
  joinedAt: timestamp("joined_at").defaultNow(),
  invitedBy: text("invited_by"), // Clerk user ID
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Post Types
export const postTypeEnum = pgEnum("post_type", ["question", "discussion", "announcement", "resource"])

// Community Posts
export const communityPosts = pgTable("community_posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  type: postTypeEnum("type").default("discussion"),
  authorId: text("author_id").notNull(), // Clerk user ID
  groupId: uuid("group_id").references(() => communityGroups.id),
  isPinned: boolean("is_pinned").default(false),
  isLocked: boolean("is_locked").default(false),
  viewCount: integer("view_count").default(0),
  likeCount: integer("like_count").default(0),
  commentCount: integer("comment_count").default(0),
  tags: text("tags").array(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Post Comments
export const postComments = pgTable("post_comments", {
  id: uuid("id").defaultRandom().primaryKey(),
  content: text("content").notNull(),
  postId: uuid("post_id")
    .references(() => communityPosts.id)
    .notNull(),
  authorId: text("author_id").notNull(), // Clerk user ID
  parentId: uuid("parent_id").references(() => postComments.id),
  isAcceptedAnswer: boolean("is_accepted_answer").default(false),
  likeCount: integer("like_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Post Likes
export const postLikes = pgTable("post_likes", {
  id: uuid("id").defaultRandom().primaryKey(),
  postId: uuid("post_id").references(() => communityPosts.id),
  commentId: uuid("comment_id").references(() => postComments.id),
  userId: text("user_id").notNull(), // Clerk user ID
  createdAt: timestamp("created_at").defaultNow(),
})

// Direct Messages
export const directMessages = pgTable("direct_messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  senderId: text("sender_id").notNull(), // Clerk user ID
  recipientId: text("recipient_id").notNull(), // Clerk user ID
  content: text("content").notNull(),
  isRead: boolean("is_read").default(false),
  readAt: timestamp("read_at"),
  createdAt: timestamp("created_at").defaultNow(),
})

// ==========================================
// RELATIONS
// ==========================================

export const teamMembersRelations = relations(teamMembers, ({ many }) => ({
  articles: many(articles),
  blogPosts: many(blog),
  assignedFormSubmissions: many(formSubmissions),
  assignedContacts: many(crmContacts),
  assignedDeals: many(crmDeals),
  assignedTasks: many(crmTasks),
  createdTasks: many(crmTasks),
  activities: many(crmActivities),
  courses: many(courses),
}))

export const articlesRelations = relations(articles, ({ one }) => ({
  author: one(teamMembers, {
    fields: [articles.authorId],
    references: [teamMembers.id],
  }),
}))

export const blogRelations = relations(blog, ({ one }) => ({
  author: one(teamMembers, {
    fields: [blog.authorId],
    references: [teamMembers.id],
  }),
}))

export const formSubmissionsRelations = relations(formSubmissions, ({ one }) => ({
  assignedTo: one(teamMembers, {
    fields: [formSubmissions.assignedToId],
    references: [teamMembers.id],
  }),
}))

// CRM Relations
export const crmContactsRelations = relations(crmContacts, ({ one, many }) => ({
  assignedTo: one(teamMembers, {
    fields: [crmContacts.assignedToId],
    references: [teamMembers.id],
  }),
  formSubmission: one(formSubmissions, {
    fields: [crmContacts.formSubmissionId],
    references: [formSubmissions.id],
  }),
  deals: many(crmDeals),
  tasks: many(crmTasks),
  activities: many(crmActivities),
}))

export const crmDealsRelations = relations(crmDeals, ({ one, many }) => ({
  contact: one(crmContacts, {
    fields: [crmDeals.contactId],
    references: [crmContacts.id],
  }),
  assignedTo: one(teamMembers, {
    fields: [crmDeals.assignedToId],
    references: [teamMembers.id],
  }),
  tasks: many(crmTasks),
  activities: many(crmActivities),
}))

export const crmTasksRelations = relations(crmTasks, ({ one }) => ({
  assignedTo: one(teamMembers, {
    fields: [crmTasks.assignedToId],
    references: [teamMembers.id],
  }),
  createdBy: one(teamMembers, {
    fields: [crmTasks.createdById],
    references: [teamMembers.id],
  }),
  contact: one(crmContacts, {
    fields: [crmTasks.contactId],
    references: [crmContacts.id],
  }),
  deal: one(crmDeals, {
    fields: [crmTasks.dealId],
    references: [crmDeals.id],
  }),
}))

export const crmActivitiesRelations = relations(crmActivities, ({ one }) => ({
  performedBy: one(teamMembers, {
    fields: [crmActivities.performedById],
    references: [teamMembers.id],
  }),
  contact: one(crmContacts, {
    fields: [crmActivities.contactId],
    references: [crmContacts.id],
  }),
  deal: one(crmDeals, {
    fields: [crmActivities.dealId],
    references: [crmDeals.id],
  }),
}))

// LMS Relations
export const courseCategoriesRelations = relations(courseCategories, ({ one, many }) => ({
  parent: one(courseCategories, {
    fields: [courseCategories.parentId],
    references: [courseCategories.id],
  }),
  courses: many(courses),
}))

export const coursesRelations = relations(courses, ({ one, many }) => ({
  category: one(courseCategories, {
    fields: [courses.categoryId],
    references: [courseCategories.id],
  }),
  instructor: one(teamMembers, {
    fields: [courses.instructorId],
    references: [teamMembers.id],
  }),
  sections: many(courseSections),
  lessons: many(courseLessons),
  enrollments: many(courseEnrollments),
}))

export const courseSectionsRelations = relations(courseSections, ({ one, many }) => ({
  course: one(courses, {
    fields: [courseSections.courseId],
    references: [courses.id],
  }),
  lessons: many(courseLessons),
}))

export const courseLessonsRelations = relations(courseLessons, ({ one, many }) => ({
  section: one(courseSections, {
    fields: [courseLessons.sectionId],
    references: [courseSections.id],
  }),
  course: one(courses, {
    fields: [courseLessons.courseId],
    references: [courses.id],
  }),
  progress: many(lessonProgress),
}))

export const courseEnrollmentsRelations = relations(courseEnrollments, ({ one, many }) => ({
  course: one(courses, {
    fields: [courseEnrollments.courseId],
    references: [courses.id],
  }),
  lessonProgress: many(lessonProgress),
}))

export const lessonProgressRelations = relations(lessonProgress, ({ one }) => ({
  lesson: one(courseLessons, {
    fields: [lessonProgress.lessonId],
    references: [courseLessons.id],
  }),
  enrollment: one(courseEnrollments, {
    fields: [lessonProgress.enrollmentId],
    references: [courseEnrollments.id],
  }),
}))

// Community Relations
export const communityGroupsRelations = relations(communityGroups, ({ many }) => ({
  memberships: many(groupMemberships),
  posts: many(communityPosts),
}))

export const groupMembershipsRelations = relations(groupMemberships, ({ one }) => ({
  group: one(communityGroups, {
    fields: [groupMemberships.groupId],
    references: [communityGroups.id],
  }),
}))

export const communityPostsRelations = relations(communityPosts, ({ one, many }) => ({
  group: one(communityGroups, {
    fields: [communityPosts.groupId],
    references: [communityGroups.id],
  }),
  comments: many(postComments),
  likes: many(postLikes),
}))

export const postCommentsRelations = relations(postComments, ({ one, many }) => ({
  post: one(communityPosts, {
    fields: [postComments.postId],
    references: [communityPosts.id],
  }),
  parent: one(postComments, {
    fields: [postComments.parentId],
    references: [postComments.id],
  }),
  replies: many(postComments, {
    relationName: "comment_replies",
  }),
  likes: many(postLikes),
}))

export const postLikesRelations = relations(postLikes, ({ one }) => ({
  post: one(communityPosts, {
    fields: [postLikes.postId],
    references: [communityPosts.id],
  }),
  comment: one(postComments, {
    fields: [postLikes.commentId],
    references: [postComments.id],
  }),
}))
