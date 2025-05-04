# LifeX Labs - Contentful CMS Guide

This comprehensive guide explains how to manage content for the LifeX Labs website using Contentful CMS. It covers updating news articles, managing member profiles, and handling form submissions.

## Table of Contents

1. [Getting Started with Contentful](#getting-started-with-contentful)
2. [Managing News Content](#managing-news-content)
3. [Managing People Profiles](#managing-people-profiles)
4. [Managing Projects](#managing-projects)
5. [Handling Form Submissions](#handling-form-submissions)
6. [Best Practices](#best-practices)

## Getting Started with Contentful

### Accessing the CMS

1. Navigate to [https://app.contentful.com/](https://app.contentful.com/)
2. Log in with your credentials
3. Select the "LifeX Labs" space from your spaces list
4. You'll be taken to the Contentful dashboard for the LifeX Labs website

### Understanding Content Models

The LifeX Labs website uses the following content models:

- **News Article**: Blog posts and news updates
- **Person**: Team member profiles
- **Project**: Research project information
- **Publication**: Academic publications
- **Resource**: Downloadable resources and links
- **Form Submission**: Contact form entries

## Managing News Content

### Adding a New News Article

1. In the Contentful sidebar, click on "Content"
2. Click the "Add entry" button and select "News Article"
3. Fill in the following fields:
   - **Title**: The headline of the article
   - **Slug**: URL-friendly version of the title (auto-generated, but can be edited)
   - **Date**: Publication date
   - **Author**: Name of the author
   - **Category**: Article category (e.g., "Research", "Announcement")
   - **Excerpt**: Brief summary (appears in listings and social shares)
   - **Featured Image**: Upload or select an image
   - **Content**: Main article content using the rich text editor
   - **Tags**: Keywords related to the article

4. When finished, click "Publish" in the top-right corner

### Editing an Existing News Article

1. Go to "Content" in the sidebar
2. Filter by "News Article" content type
3. Click on the article you want to edit
4. Make your changes
5. Click "Publish" to update the live site

### Deleting a News Article

1. Go to "Content" in the sidebar
2. Filter by "News Article" content type
3. Click on the article you want to delete
4. Click the "Actions" button in the top-right corner
5. Select "Delete"
6. Confirm deletion

### Best Practices for News Articles

- **Featured Images**: Use high-quality images with a 16:9 aspect ratio (1200×675px recommended)
- **Excerpts**: Keep them between 120-160 characters for optimal display in listings
- **Content**: Use headings, bullet points, and images to break up text and improve readability
- **Tags**: Include 3-5 relevant tags to improve searchability

## Managing People Profiles

### Adding a New Team Member

1. In the Contentful sidebar, click on "Content"
2. Click the "Add entry" button and select "Person"
3. Fill in the following fields:
   - **Name**: Full name of the team member
   - **Slug**: URL-friendly version of the name (auto-generated, but can be edited)
   - **Role**: Position or title
   - **Photo**: Upload a professional headshot
   - **Short Bio**: Brief introduction (1-2 sentences)
   - **Biography**: Detailed professional background using the rich text editor
   - **Email**: Professional email address
   - **Phone**: Contact number (optional)
   - **Office**: Physical location (optional)
   - **LinkedIn**: LinkedIn profile URL (optional)
   - **Twitter**: Twitter profile URL (optional)
   - **Google Scholar**: Google Scholar profile URL (optional)
   - **GitHub**: GitHub profile URL (optional)
   - **Publications**: Link to relevant publications (references)

4. When finished, click "Publish" in the top-right corner

### Editing a Team Member Profile

1. Go to "Content" in the sidebar
2. Filter by "Person" content type
3. Click on the profile you want to edit
4. Make your changes
5. Click "Publish" to update the live site

### Removing a Team Member

1. Go to "Content" in the sidebar
2. Filter by "Person" content type
3. Click on the profile you want to remove
4. Click the "Actions" button in the top-right corner
5. Select "Delete"
6. Confirm deletion

### Best Practices for People Profiles

- **Photos**: Use professional headshots with a 1:1 aspect ratio (600×600px recommended)
- **Short Bio**: Keep it concise (25-30 words maximum)
- **Biography**: Include education, research interests, and significant achievements
- **Publications**: Link to the most relevant or recent publications

## Managing Projects

### Adding a New Project

1. In the Contentful sidebar, click on "Content"
2. Click the "Add entry" button and select "Project"
3. Fill in the following fields:
   - **Title**: Name of the project
   - **Slug**: URL-friendly version of the title (auto-generated, but can be edited)
   - **Short Description**: Brief overview of the project
   - **Description**: Detailed project information using the rich text editor
   - **Featured Image**: Upload or select a representative image
   - **Start Date**: When the project began
   - **End Date**: When the project ended (leave blank if ongoing)
   - **Category**: Project category (e.g., "Cognitive Enhancement", "Wearable Technology")
   - **Status**: Current status (e.g., "Active", "Completed", "On Hold")
   - **Team Members**: Link to team members involved in the project
   - **Key Features**: Add project highlights or key components
   - **Technologies**: List technologies used in the project
   - **Publications**: Link to related publications
   - **Resources**: Link to project resources

4. When finished, click "Publish" in the top-right corner

### Editing an Existing Project

1. Go to "Content" in the sidebar
2. Filter by "Project" content type
3. Click on the project you want to edit
4. Make your changes
5. Click "Publish" to update the live site

### Archiving or Deleting a Project

1. Go to "Content" in the sidebar
2. Filter by "Project" content type
3. Click on the project you want to archive or delete
4. To archive: Change the "Status" field to "Archived"
5. To delete: Click the "Actions" button in the top-right corner, select "Delete", and confirm

### Best Practices for Projects

- **Featured Images**: Use high-quality images that represent the project (1200×675px recommended)
- **Short Description**: Keep it under 200 characters
- **Description**: Include project goals, methodology, and outcomes
- **Team Members**: Always link to the relevant team member profiles
- **Key Features**: Highlight 3-5 most important aspects of the project

## Handling Form Submissions

### Setting Up Form Submission Handling

The LifeX Labs website uses a server-side form handling approach that stores submissions in Contentful.

1. In the Contentful sidebar, click on "Content"
2. Form submissions are automatically created when users submit the contact form
3. Each submission includes:
   - **Name**: Submitter's name
   - **Email**: Submitter's email address
   - **Subject**: Message subject
   - **Message**: Full message content
   - **Submission Date**: When the form was submitted
   - **Status**: Processing status (New, In Progress, Completed)

### Managing Form Submissions

1. Go to "Content" in the sidebar
2. Filter by "Form Submission" content type
3. Click on any submission to view details
4. Update the "Status" field as you process the submission
5. Click "Publish" to save your changes

### Setting Up Email Notifications

To receive email notifications for new form submissions:

1. Go to "Settings" in the sidebar
2. Click on "Webhooks"
3. Click "Add Webhook"
4. Name it "Form Submission Notification"
5. For "URL", enter your email notification service endpoint
6. Under "Triggers", select:
   - Content Type: Form Submission
   - Action: Create
7. Click "Save" to activate the webhook

## Best Practices

### General Content Guidelines

1. **Consistency**: Maintain consistent tone, style, and formatting across all content
2. **Images**: Always compress images before uploading to improve site performance
3. **Links**: Regularly check and update external links to ensure they're still valid
4. **SEO**: Include relevant keywords in titles, descriptions, and content
5. **Accessibility**: Add alt text to all images and use proper heading hierarchy

### Workflow Tips

1. **Draft Mode**: Use the "Draft" status for content that's not ready to publish
2. **Preview**: Always use the preview function to check how content will appear before publishing
3. **Scheduling**: Use the scheduling feature for content that should go live at a specific time
4. **Versioning**: Review version history before publishing major changes
5. **Collaboration**: Use comments to communicate with team members about specific content

### Troubleshooting Common Issues

1. **Content Not Appearing**: Check that the content is published and the slug is correct
2. **Images Not Displaying**: Verify the image is published and the file format is supported
3. **Formatting Issues**: Check for extra HTML tags or formatting in the rich text editor
4. **Relationship Errors**: Ensure all referenced content (like team members in projects) is published
5. **API Errors**: Contact the development team if content is published but not appearing on the site

## Additional Resources

- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Rich Text Editor Guide](https://www.contentful.com/developers/docs/concepts/rich-text/)
- [Image Handling Best Practices](https://www.contentful.com/developers/docs/concepts/images/)
- [Content Modeling Guide](https://www.contentful.com/developers/docs/concepts/content-modelling/)

For technical support or questions about the CMS setup, please contact the LifeX Labs development team at dev@lifexlabs.org.
