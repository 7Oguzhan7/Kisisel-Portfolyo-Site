using Microsoft.EntityFrameworkCore;
using PortfolioApi.Models;

namespace PortfolioApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<Certificate> Certificates { get; set; }
        public DbSet<ContactMessage> ContactMessages { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Başlangıç Projeleri (Seed Data)
            modelBuilder.Entity<Project>().HasData(
                new Project
                {
                    Id = 1,
                    TitleTr = "Akıllı Kütüphane ve Rezervasyon Sistemi",
                    TitleEn = "Smart Library & Reservation System",
                    DescriptionTr = "PHP ve CodeIgniter 4 ile geliştirilen; kitap yönetimi, kullanıcı rezervasyonu ve kapsamlı admin paneli içeren tam donanımlı kütüphane yönetim sistemi. Ekip projesi olarak geliştirildi.",
                    DescriptionEn = "A full-featured library management system built with PHP and CodeIgniter 4, featuring book management, user reservations, and a comprehensive admin panel. Developed as a team project.",
                    Technologies = "PHP, CodeIgniter 4, MySQL, JavaScript",
                    GitHubUrl = "https://github.com/7Oguzhan7/Akilli-kutuphane-ve-rezervasyon-sistemi",
                    DemoUrl = "",
                    ImageUrl = ""
                },
                new Project
                {
                    Id = 2,
                    TitleTr = "Kişisel Portfolyo Sitesi",
                    TitleEn = "Personal Portfolio Website",
                    DescriptionTr = "React ve ASP.NET Core Web API kullanılarak geliştirilen, SQLite veritabanı ile dinamik içerik yönetimi sağlayan modern kişisel portfolyo sitesi.",
                    DescriptionEn = "A modern personal portfolio website built with React and ASP.NET Core Web API, featuring dynamic content management via a SQLite database.",
                    Technologies = "React, ASP.NET Core, SQLite, CSS",
                    GitHubUrl = "https://github.com/7Oguzhan7/Kisisel-Portfolyo-Site",
                    DemoUrl = "",
                    ImageUrl = ""
                }
            );

            // Başlangıç Yetenekleri (Seed Data)
            modelBuilder.Entity<Skill>().HasData(
                // Frontend
                new Skill { Id = 1, Name = "React", Color = "#61DAFB", Category = "frontend" },
                new Skill { Id = 2, Name = "JavaScript", Color = "#F7DF1E", Category = "frontend" },
                new Skill { Id = 3, Name = "HTML5", Color = "#E34F26", Category = "frontend" },
                new Skill { Id = 4, Name = "CSS3", Color = "#1572B6", Category = "frontend" },
                new Skill { Id = 5, Name = "Tailwind", Color = "#38B2AC", Category = "frontend" },

                // Backend
                new Skill { Id = 6, Name = "PHP", Color = "#777BB4", Category = "backend" },
                new Skill { Id = 7, Name = "CodeIgniter", Color = "#EF4223", Category = "backend" },
                new Skill { Id = 8, Name = "MySQL", Color = "#4479A1", Category = "backend" },
                new Skill { Id = 9, Name = "ASP.NET Core", Color = "#512BD4", Category = "backend" },

                // Tools
                new Skill { Id = 10, Name = "Git", Color = "#F05032", Category = "tools" },
                new Skill { Id = 11, Name = "GitHub", Color = "#181717", Category = "tools" },
                new Skill { Id = 12, Name = "Visual Studio", Color = "#5C2D91", Category = "tools" },
                new Skill { Id = 13, Name = "VS Code", Color = "#007ACC", Category = "tools" },

                // AI
                new Skill { Id = 14, Name = "ChatGPT-4o", Color = "#10A37F", Category = "ai" },
                new Skill { Id = 15, Name = "Gemini", Color = "#8E75FF", Category = "ai" },
                new Skill { Id = 16, Name = "Claude", Color = "#D97757", Category = "ai" },
                new Skill { Id = 17, Name = "Cursor", Color = "#2B2B2B", Category = "ai" },
                new Skill { Id = 18, Name = "CodeFormer", Color = "#FF3366", Category = "ai" }
            );

            // Başlangıç Sertifikaları (Seed Data)
            modelBuilder.Entity<Certificate>().HasData(
                new Certificate
                {
                    Id = 1,
                    TitleTr = "Sıfırdan İleri Düzey Web Geliştirme (HTML, CSS, Javascript)",
                    TitleEn = "From Zero to Advanced Web Development (HTML, CSS, Javascript)",
                    Organization = "Udemy — Levent Ertunalılar",
                    Date = "Ağustos 2025",
                    ImageUrl = "/certificates/udemy-webdev.jpg",
                    Link = "https://ude.my/UC-9e7ed3ba-3935-47ae-9c4a-3771f959fb4d"
                },
                new Certificate
                {
                    Id = 2,
                    TitleTr = "İngilizce A1 Seviyesi Sertifikası",
                    TitleEn = "English A1 Level Certificate",
                    Organization = "BTK Akademi",
                    Date = "2025",
                    ImageUrl = "/certificates/english-a1.pdf",
                    Link = ""
                },
                new Certificate
                {
                    Id = 3,
                    TitleTr = "İngilizce A2 Seviyesi Sertifikası",
                    TitleEn = "English A2 Level Certificate",
                    Organization = "BTK Akademi",
                    Date = "2025",
                    ImageUrl = "/certificates/english-a2.pdf",
                    Link = ""
                },
                new Certificate
                {
                    Id = 4,
                    TitleTr = "İngilizce B1 Seviyesi Sertifikası",
                    TitleEn = "English B1 Level Certificate",
                    Organization = "BTK Akademi",
                    Date = "2025",
                    ImageUrl = "/certificates/english-b1.pdf",
                    Link = ""
                },
                new Certificate
                {
                    Id = 5,
                    TitleTr = "İngilizce B2 Seviyesi Sertifikası",
                    TitleEn = "English B2 Level Certificate",
                    Organization = "BTK Akademi",
                    Date = "2025",
                    ImageUrl = "/certificates/english-b2.pdf",
                    Link = ""
                }
            );
        }
    }
}
