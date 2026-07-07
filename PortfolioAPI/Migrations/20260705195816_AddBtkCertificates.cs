using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace PortfolioAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddBtkCertificates : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Certificates",
                columns: new[] { "Id", "Date", "ImageUrl", "Link", "Organization", "TitleEn", "TitleTr" },
                values: new object[,]
                {
                    { 2, "2025", "/certificates/english-a1.pdf", "", "BTK Akademi", "English A1 Level Certificate", "İngilizce A1 Seviyesi Sertifikası" },
                    { 3, "2025", "/certificates/english-a2.pdf", "", "BTK Akademi", "English A2 Level Certificate", "İngilizce A2 Seviyesi Sertifikası" },
                    { 4, "2025", "/certificates/english-b1.pdf", "", "BTK Akademi", "English B1 Level Certificate", "İngilizce B1 Seviyesi Sertifikası" },
                    { 5, "2025", "/certificates/english-b2.pdf", "", "BTK Akademi", "English B2 Level Certificate", "İngilizce B2 Seviyesi Sertifikası" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DeleteData(
                table: "Certificates",
                keyColumn: "Id",
                keyValue: 5);
        }
    }
}
