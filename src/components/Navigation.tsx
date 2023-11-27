function Navigation({pages, page, goToPrev, goToNext}: {pages:number, page: number, goToPrev: ()=> void, goToNext: ()=> void}) {
    return (
        <nav className='navigation'>
            {(page > 1)
              ? <button onClick={goToPrev}>Prev</button>
              : null}
            <p>{page}</p>
            {(page < pages) 
              ? <button onClick={goToNext}>Next</button>
              : null}
          </nav>
    )
};

export {Navigation};