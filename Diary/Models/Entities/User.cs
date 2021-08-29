using System;
using Dairy.Entities;

namespace Dairy.Entities
{  
    public class User : BaseEntity
    {
        public string FullName { get; set; }
        public string MailAddress { get; set; }
        public string Password { get; set; }
        public string PasswordSalt { get; set; }
        public bool IsVerified { get; set; }
        public DateTime? BirthDate { get; set; }
    }
}