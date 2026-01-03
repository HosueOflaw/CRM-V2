using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "additional_amounts",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    file_code = table.Column<long>(type: "bigint", nullable: true),
                    dept_code = table.Column<long>(type: "bigint", nullable: true),
                    value = table.Column<decimal>(type: "decimal(18,3)", nullable: true),
                    amount_type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    user_added = table.Column<int>(type: "int", nullable: true),
                    date_added = table.Column<DateTime>(type: "datetime2", nullable: true),
                    user_updated = table.Column<int>(type: "int", nullable: true),
                    date_updated = table.Column<DateTime>(type: "datetime2", nullable: true),
                    enabled = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_additional_amounts", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "attachments",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    file_code = table.Column<long>(type: "bigint", nullable: true),
                    dept_code = table.Column<long>(type: "bigint", nullable: true),
                    attach_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    attach_type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    auto_number_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    value = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    user_added = table.Column<int>(type: "int", nullable: true),
                    user_updated = table.Column<int>(type: "int", nullable: true),
                    date_added = table.Column<DateTime>(type: "datetime2", nullable: true),
                    date_updated = table.Column<DateTime>(type: "datetime2", nullable: true),
                    enabled = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_attachments", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "audits_files",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    file_code = table.Column<long>(type: "bigint", nullable: true),
                    dept_code = table.Column<long>(type: "bigint", nullable: true),
                    audit = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    user_added = table.Column<int>(type: "int", nullable: true),
                    user_updated = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_audits_files", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "auto_numbers",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    file_code = table.Column<long>(type: "bigint", nullable: true),
                    parent_auto_id = table.Column<int>(type: "int", nullable: true),
                    auto_number = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    case_ref = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    note = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    claimant = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    user_added = table.Column<int>(type: "int", nullable: true),
                    date_added = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_auto_numbers", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "callcenter_statements",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    file_code = table.Column<long>(type: "bigint", nullable: true),
                    dept_code = table.Column<long>(type: "bigint", nullable: true),
                    date_added = table.Column<DateTime>(type: "datetime2", nullable: true),
                    notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    contact_method = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    connected_status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    phone_number = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    next_action = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    next_date = table.Column<DateTime>(type: "datetime2", nullable: true),
                    promise_amount = table.Column<decimal>(type: "decimal(18,3)", nullable: true),
                    phone_owner = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    user_added = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_callcenter_statements", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "departments",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    code = table.Column<int>(type: "int", nullable: true),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_departments", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "file_classifications",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    file_code = table.Column<long>(type: "bigint", nullable: true),
                    dept_code = table.Column<long>(type: "bigint", nullable: true),
                    classification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    department = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    user_added = table.Column<int>(type: "int", nullable: true),
                    date_added = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_file_classifications", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "file_details",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    file_code = table.Column<long>(type: "bigint", nullable: true),
                    dept_code = table.Column<long>(type: "bigint", nullable: true),
                    reason = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    patch_no = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    court_employee = table.Column<int>(type: "int", nullable: true),
                    client = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    date_added = table.Column<DateTime>(type: "datetime2", nullable: true),
                    date_finished = table.Column<DateTime>(type: "datetime2", nullable: true),
                    contract_no = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dept_amount = table.Column<decimal>(type: "decimal(18,3)", nullable: true),
                    legal_plaintiff = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    lawyer_user = table.Column<int>(type: "int", nullable: true),
                    court_user = table.Column<int>(type: "int", nullable: true),
                    md_user = table.Column<int>(type: "int", nullable: true),
                    legal_advisor_user = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_file_details", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "file_statuses",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    file_code = table.Column<long>(type: "bigint", nullable: true),
                    dept_code = table.Column<int>(type: "int", nullable: true),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    date_added = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_file_statuses", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "mails",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    file_code = table.Column<long>(type: "bigint", nullable: true),
                    dept_code = table.Column<long>(type: "bigint", nullable: true),
                    subject = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    body = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    date_added = table.Column<DateTime>(type: "datetime2", nullable: true),
                    date_updated = table.Column<DateTime>(type: "datetime2", nullable: true),
                    user_added = table.Column<int>(type: "int", nullable: true),
                    user_updated = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mails", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "mainfiles",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    code = table.Column<int>(type: "int", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    cid = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    date_added = table.Column<DateTime>(type: "datetime2", nullable: true),
                    nationality = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    archive = table.Column<bool>(type: "bit", nullable: true),
                    note_ = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    work = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    membership = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    company_email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    company_fax = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    company_register = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    partner1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    partner2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    partner3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    register_type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    kafala_added_by = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mainfiles", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "notes",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    file_code = table.Column<long>(type: "bigint", nullable: true),
                    dept_code = table.Column<long>(type: "bigint", nullable: true),
                    note_text = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    date_added = table.Column<DateTime>(type: "datetime2", nullable: true),
                    user_added = table.Column<int>(type: "int", nullable: true),
                    user_updated = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_notes", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "payments",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    file_code = table.Column<long>(type: "bigint", nullable: true),
                    dept_code = table.Column<long>(type: "bigint", nullable: true),
                    value = table.Column<decimal>(type: "decimal(18,3)", nullable: true),
                    date_added = table.Column<DateTime>(type: "datetime2", nullable: true),
                    joural_entry = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    al_entry = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    user_added = table.Column<int>(type: "int", nullable: true),
                    user_updated = table.Column<int>(type: "int", nullable: true),
                    callcenter_user = table.Column<int>(type: "int", nullable: true),
                    court_user = table.Column<int>(type: "int", nullable: true),
                    advisor_user = table.Column<int>(type: "int", nullable: true),
                    lawyer_user = table.Column<int>(type: "int", nullable: true),
                    translate_date = table.Column<DateTime>(type: "datetime2", nullable: true),
                    translate_back_date = table.Column<DateTime>(type: "datetime2", nullable: true),
                    client_closed = table.Column<bool>(type: "bit", nullable: true),
                    journal_closed = table.Column<bool>(type: "bit", nullable: true),
                    file_status_after = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    commission = table.Column<int>(type: "int", nullable: true),
                    commission_closed = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_payments", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    code = table.Column<int>(type: "int", nullable: true),
                    username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    full_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    created_at = table.Column<DateTime>(type: "datetime2", nullable: true),
                    PasswordHashed = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    PasswordSalt = table.Column<byte[]>(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "additional_amounts");

            migrationBuilder.DropTable(
                name: "attachments");

            migrationBuilder.DropTable(
                name: "audits_files");

            migrationBuilder.DropTable(
                name: "auto_numbers");

            migrationBuilder.DropTable(
                name: "callcenter_statements");

            migrationBuilder.DropTable(
                name: "departments");

            migrationBuilder.DropTable(
                name: "file_classifications");

            migrationBuilder.DropTable(
                name: "file_details");

            migrationBuilder.DropTable(
                name: "file_statuses");

            migrationBuilder.DropTable(
                name: "mails");

            migrationBuilder.DropTable(
                name: "mainfiles");

            migrationBuilder.DropTable(
                name: "notes");

            migrationBuilder.DropTable(
                name: "payments");

            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
