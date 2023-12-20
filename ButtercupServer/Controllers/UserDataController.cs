using ButtercupServer.Data;
using ButtercupServer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace ButtercupServer.Controllers
{
    #region snippet
    public class UserDataController : Controller
    {
        private readonly VaultContext _context;

        public UserDataController(VaultContext context)
        {
            _context = context;
        }
        #endregion

        // GET: UserDatas
        public async Task<IActionResult> Index()
        {
            return View(await _context.UserData.ToListAsync());
        }

        // // GET: Students/Details/5
        // public async Task<IActionResult> Details(string id)
        // {
        //     if (id == null)
        //     {
        //         return NotFound();
        //     }

        //     var userData = await _context.UserData
        //         .FirstOrDefaultAsync(m => m.tideUID == id);
        //     if (userData == null)
        //     {
        //         return NotFound();
        //     }

        //     return View(userData);
        // }

        // // GET: Students/Create
        // public IActionResult Create()
        // {
        //     return View();
        // }

        // // POST: Students/Create
        // // To protect from overposting attacks, enable the specific properties you want to bind to.
        // // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        // [HttpPost]
        // [ValidateAntiForgeryToken]
        // public async Task<IActionResult> Create([Bind("ID,LastName,FirstMidName,EnrollmentDate")] Student student)
        // {
        //     if (ModelState.IsValid)
        //     {
        //         _context.Add(student);
        //         await _context.SaveChangesAsync();
        //         return RedirectToAction(nameof(Index));
        //     }
        //     return View(student);
        // }

        // // GET: Students/Edit/5
        // public async Task<IActionResult> Edit(int? id)
        // {
        //     if (id == null)
        //     {
        //         return NotFound();
        //     }

        //     var student = await _context.Students.FindAsync(id);
        //     if (student == null)
        //     {
        //         return NotFound();
        //     }
        //     return View(student);
        // }

        // // POST: Students/Edit/5
        // // To protect from overposting attacks, enable the specific properties you want to bind to.
        // // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        // [HttpPost]
        // [ValidateAntiForgeryToken]
        // public async Task<IActionResult> Edit(int id, [Bind("ID,LastName,FirstMidName,EnrollmentDate")] Student student)
        // {
        //     if (id != student.ID)
        //     {
        //         return NotFound();
        //     }

        //     if (ModelState.IsValid)
        //     {
        //         try
        //         {
        //             _context.Update(student);
        //             await _context.SaveChangesAsync();
        //         }
        //         catch (DbUpdateConcurrencyException)
        //         {
        //             if (!StudentExists(student.ID))
        //             {
        //                 return NotFound();
        //             }
        //             else
        //             {
        //                 throw;
        //             }
        //         }
        //         return RedirectToAction(nameof(Index));
        //     }
        //     return View(student);
        // }

        // // GET: Students/Delete/5
        // public async Task<IActionResult> Delete(int? id)
        // {
        //     if (id == null)
        //     {
        //         return NotFound();
        //     }

        //     var student = await _context.Students
        //         .FirstOrDefaultAsync(m => m.ID == id);
        //     if (student == null)
        //     {
        //         return NotFound();
        //     }

        //     return View(student);
        // }

        // // POST: Students/Delete/5
        // [HttpPost, ActionName("Delete")]
        // [ValidateAntiForgeryToken]
        // public async Task<IActionResult> DeleteConfirmed(int id)
        // {
        //     var student = await _context.Students.FindAsync(id);
        //     _context.Students.Remove(student);
        //     await _context.SaveChangesAsync();
        //     return RedirectToAction(nameof(Index));
        // }

        // private bool StudentExists(int id)
        // {
        //     return _context.Students.Any(e => e.ID == id);
        // }
    }
}