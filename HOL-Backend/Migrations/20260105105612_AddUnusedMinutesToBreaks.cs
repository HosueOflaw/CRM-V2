using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Migrations
{
    /// <inheritdoc />
    public partial class AddUnusedMinutesToBreaks : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "unused_minutes",
                table: "user_breaks",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "unused_minutes",
                table: "user_breaks");
        }
    }
}
