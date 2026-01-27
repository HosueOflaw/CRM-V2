using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Migrations
{
    /// <inheritdoc />
    public partial class RemovePermissionsFromFileDetailV2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "can_receive_automated_messages",
                table: "file_details");

            migrationBuilder.DropColumn(
                name: "can_view_attachments",
                table: "file_details");

            migrationBuilder.DropColumn(
                name: "can_view_financial_matrix",
                table: "file_details");

            migrationBuilder.DropColumn(
                name: "can_view_invoices",
                table: "file_details");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "can_receive_automated_messages",
                table: "file_details",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "can_view_attachments",
                table: "file_details",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "can_view_financial_matrix",
                table: "file_details",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "can_view_invoices",
                table: "file_details",
                type: "bit",
                nullable: true);
        }
    }
}
