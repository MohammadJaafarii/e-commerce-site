using System.Linq.Expressions;
using System.Reflection.Metadata.Ecma335;

namespace Core.Specifications
{
    public interface ISpecification<T>
    {
         Expression<Func<T,bool>> Criteria{get;}
         List<Expression<Func<T,object>>> Includes {get;}
    }
}