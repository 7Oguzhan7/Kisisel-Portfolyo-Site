using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PortfolioAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateProjectGitHubUrls : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1,
                column: "GitHubUrl",
                value: "https://github.com/7Oguzhan7/Akilli-kutuphane-ve-rezervasyon-sistemi");

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 2,
                column: "GitHubUrl",
                value: "https://github.com/7Oguzhan7/Kisisel-Portfolyo-Site");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1,
                column: "GitHubUrl",
                value: "https://github.com/7Oguzhan7/grup-proje");

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 2,
                column: "GitHubUrl",
                value: "");
        }
    }
}
