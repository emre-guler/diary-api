using Microsoft.EntityFrameworkCore;

namespace Diary.Data
{
    public class DiaryContext : DbContext
    {
        public DiaryContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {

        }

        // Entities
    }
}