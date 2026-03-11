using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Migrations
{
    /// <inheritdoc />
    public partial class UpdateAttachmentFileContent : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "file_content",
                schema: "dbo",
                table: "attachments",
                type: "varbinary(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "file_content",
                schema: "dbo",
                table: "attachments");
        }
    }
}
