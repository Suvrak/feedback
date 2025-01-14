using Microsoft.AspNetCore.Mvc.RazorPages;
using YourNamespace.Models;
using System.Collections.Generic;

namespace YourNamespace.Pages
{
    public class IndexModel : PageModel
    {
        public List<FileItem> FileItems { get; set; }

        public void OnGet()
        {
            FileItems = new List<FileItem>
            {
                new FileItem
                {
                    Name = "Папка 1",
                    IsFolder = true,
                    Children = new List<FileItem>
                    {
                        new FileItem { Name = "Файл 1.1", IsFolder = false },
                        new FileItem { Name = "Файл 1.2", IsFolder = false }
                    }
                },
                new FileItem
                {
                    Name = "Папка 2",
                    IsFolder = true,
                    Children = new List<FileItem>
                    {
                        new FileItem { Name = "Файл 2.1", IsFolder = false },
                        new FileItem { Name = "Файл 2.2", IsFolder = false }
                    }
                },
                new FileItem { Name = "Файл 3", IsFolder = false }
            };
        }
    }
}
