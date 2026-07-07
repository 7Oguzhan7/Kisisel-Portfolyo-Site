using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace PortfolioAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddCertificateLink : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Certificates",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Certificates",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Certificates",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.AddColumn<string>(
                name: "Link",
                table: "Certificates",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Certificates",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Date", "ImageUrl", "Link", "Organization", "TitleEn", "TitleTr" },
                values: new object[] { "Ağustos 2025", "/certificates/udemy-webdev.jpg", "https://ude.my/UC-9e7ed3ba-3935-47ae-9c4a-3771f959fb4d", "Udemy — Levent Ertunalılar", "From Zero to Advanced Web Development (HTML, CSS, Javascript)", "Sıfırdan İleri Düzey Web Geliştirme (HTML, CSS, Javascript)" });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "Color", "Name" },
                values: new object[] { "#777BB4", "PHP" });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "Color", "Name" },
                values: new object[] { "#EF4223", "CodeIgniter" });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "Color", "Name" },
                values: new object[] { "#4479A1", "MySQL" });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 9,
                columns: new[] { "Color", "Name" },
                values: new object[] { "#512BD4", "ASP.NET Core" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Link",
                table: "Certificates");

            migrationBuilder.UpdateData(
                table: "Certificates",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Date", "ImageUrl", "Organization", "TitleEn", "TitleTr" },
                values: new object[] { "2023", "", "HackerRank", "React.js Developer Certificate", "React.js Geliştirici Sertifikası" });

            migrationBuilder.InsertData(
                table: "Certificates",
                columns: new[] { "Id", "Date", "ImageUrl", "Organization", "TitleEn", "TitleTr" },
                values: new object[,]
                {
                    { 2, "2022", "", "FreeCodeCamp", "Frontend Web Development", "Frontend Web Geliştirme" },
                    { 3, "2021", "", "Udemy", "Modern JavaScript Course", "Modern JavaScript Eğitimi" },
                    { 4, "2022", "", "Coursera", "UI/UX Design Basics", "UI/UX Tasarım Temelleri" }
                });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "Color", "Name" },
                values: new object[] { "#339933", "Node.js" });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "Color", "Name" },
                values: new object[] { "#888888", "Express" });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "Color", "Name" },
                values: new object[] { "#47A248", "MongoDB" });

            migrationBuilder.UpdateData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 9,
                columns: new[] { "Color", "Name" },
                values: new object[] { "#FFCA28", "Firebase" });
        }
    }
}
