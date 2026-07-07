using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace PortfolioAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Certificates",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TitleTr = table.Column<string>(type: "TEXT", nullable: false),
                    TitleEn = table.Column<string>(type: "TEXT", nullable: false),
                    Organization = table.Column<string>(type: "TEXT", nullable: false),
                    Date = table.Column<string>(type: "TEXT", nullable: false),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Certificates", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ContactMessages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Subject = table.Column<string>(type: "TEXT", nullable: false),
                    Message = table.Column<string>(type: "TEXT", nullable: false),
                    DateSent = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactMessages", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TitleTr = table.Column<string>(type: "TEXT", nullable: false),
                    TitleEn = table.Column<string>(type: "TEXT", nullable: false),
                    DescriptionTr = table.Column<string>(type: "TEXT", nullable: false),
                    DescriptionEn = table.Column<string>(type: "TEXT", nullable: false),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: false),
                    GitHubUrl = table.Column<string>(type: "TEXT", nullable: false),
                    DemoUrl = table.Column<string>(type: "TEXT", nullable: false),
                    Technologies = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Skills",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Color = table.Column<string>(type: "TEXT", nullable: false),
                    Category = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Skills", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Certificates",
                columns: new[] { "Id", "Date", "ImageUrl", "Organization", "TitleEn", "TitleTr" },
                values: new object[,]
                {
                    { 1, "2023", "", "HackerRank", "React.js Developer Certificate", "React.js Geliştirici Sertifikası" },
                    { 2, "2022", "", "FreeCodeCamp", "Frontend Web Development", "Frontend Web Geliştirme" },
                    { 3, "2021", "", "Udemy", "Modern JavaScript Course", "Modern JavaScript Eğitimi" },
                    { 4, "2022", "", "Coursera", "UI/UX Design Basics", "UI/UX Tasarım Temelleri" }
                });

            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "Id", "DemoUrl", "DescriptionEn", "DescriptionTr", "GitHubUrl", "ImageUrl", "Technologies", "TitleEn", "TitleTr" },
                values: new object[,]
                {
                    { 1, "#", "Modern and fast online store solution.", "Modern ve hızlı online mağaza çözümü.", "#", "", "React, Node.js, Stripe", "E-Commerce Platform", "E-Ticaret Platformu" },
                    { 2, "#", "Personal productivity and organization tool.", "Kişisel verimlilik ve organizasyon aracı.", "#", "", "React, Firebase, CSS", "Task Manager App", "Görev Yöneticisi" },
                    { 3, "#", "Customizable portfolio for developers.", "Geliştiriciler için özelleştirilebilir portfolyo.", "#", "", "JavaScript, HTML, CSS", "Portfolio Website", "Portfolyo Sitesi" }
                });

            migrationBuilder.InsertData(
                table: "Skills",
                columns: new[] { "Id", "Category", "Color", "Name" },
                values: new object[,]
                {
                    { 1, "frontend", "#61DAFB", "React" },
                    { 2, "frontend", "#F7DF1E", "JavaScript" },
                    { 3, "frontend", "#E34F26", "HTML5" },
                    { 4, "frontend", "#1572B6", "CSS3" },
                    { 5, "frontend", "#38B2AC", "Tailwind" },
                    { 6, "backend", "#339933", "Node.js" },
                    { 7, "backend", "#888888", "Express" },
                    { 8, "backend", "#47A248", "MongoDB" },
                    { 9, "backend", "#FFCA28", "Firebase" },
                    { 10, "tools", "#F05032", "Git" },
                    { 11, "tools", "#181717", "GitHub" },
                    { 12, "tools", "#F24E1E", "Figma" },
                    { 13, "tools", "#007ACC", "VS Code" },
                    { 14, "ai", "#10A37F", "ChatGPT-4o" },
                    { 15, "ai", "#8E75FF", "Gemini" },
                    { 16, "ai", "#D97757", "Claude" },
                    { 17, "ai", "#2B2B2B", "Cursor" },
                    { 18, "ai", "#FF3366", "CodeFormer" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Certificates");

            migrationBuilder.DropTable(
                name: "ContactMessages");

            migrationBuilder.DropTable(
                name: "Projects");

            migrationBuilder.DropTable(
                name: "Skills");
        }
    }
}
