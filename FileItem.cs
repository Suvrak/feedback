namespace YourNamespace.Models
{
    public class FileItem
    {
        public string Name { get; set; }
        public bool IsFolder { get; set; }
        public List<FileItem> Children { get; set; } = new List<FileItem>();
    }
}
