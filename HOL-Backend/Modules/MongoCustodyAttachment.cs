using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace House_of_law_api.Modules;

public class MongoCustodyAttachment
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("code")]
    public string Code { get; set; }

    [BsonElement("file_name")]
    public string FileName { get; set; }

    [BsonElement("content")]
    public byte[] Content { get; set; }

    [BsonElement("upload_date")]
    public DateTime UploadDate { get; set; } = DateTime.UtcNow;

    [BsonElement("user_id")]
    public int? UserId { get; set; }
}
