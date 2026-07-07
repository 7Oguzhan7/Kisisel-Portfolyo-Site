using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PortfolioAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateRealProjects : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "DemoUrl", "DescriptionEn", "DescriptionTr", "GitHubUrl", "Technologies", "TitleEn", "TitleTr" },
                values: new object[] { "", "A full-featured library management system built with PHP and CodeIgniter 4, featuring book management, user reservations, and a comprehensive admin panel. Developed as a team project.", "PHP ve CodeIgniter 4 ile geliştirilen; kitap yönetimi, kullanıcı rezervasyonu ve kapsamlı admin paneli içeren tam donanımlı kütüphane yönetim sistemi. Ekip projesi olarak geliştirildi.", "https://github.com/7Oguzhan7/grup-proje", "PHP, CodeIgniter 4, MySQL, JavaScript", "Smart Library & Reservation System", "Akıllı Kütüphane ve Rezervasyon Sistemi" });

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "DemoUrl", "DescriptionEn", "DescriptionTr", "GitHubUrl", "Technologies", "TitleEn", "TitleTr" },
                values: new object[] { "", "A modern personal portfolio website built with React and ASP.NET Core Web API, featuring dynamic content management via a SQLite database.", "React ve ASP.NET Core Web API kullanılarak geliştirilen, SQLite veritabanı ile dinamik içerik yönetimi sağlayan modern kişisel portfolyo sitesi.", "", "React, ASP.NET Core, SQLite, CSS", "Personal Portfolio Website", "Kişisel Portfolyo Sitesi" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "DemoUrl", "DescriptionEn", "DescriptionTr", "GitHubUrl", "Technologies", "TitleEn", "TitleTr" },
                values: new object[] { "#", "Modern and fast online store solution.", "Modern ve hızlı online mağaza çözümü.", "#", "React, Node.js, Stripe", "E-Commerce Platform", "E-Ticaret Platformu" });

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "DemoUrl", "DescriptionEn", "DescriptionTr", "GitHubUrl", "Technologies", "TitleEn", "TitleTr" },
                values: new object[] { "#", "Personal productivity and organization tool.", "Kişisel verimlilik ve organizasyon aracı.", "#", "React, Firebase, CSS", "Task Manager App", "Görev Yöneticisi" });

            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "Id", "DemoUrl", "DescriptionEn", "DescriptionTr", "GitHubUrl", "ImageUrl", "Technologies", "TitleEn", "TitleTr" },
                values: new object[] { 3, "#", "Customizable portfolio for developers.", "Geliştiriciler için özelleştirilebilir portfolyo.", "#", "", "JavaScript, HTML, CSS", "Portfolio Website", "Portfolyo Sitesi" });
        }
    }
}
