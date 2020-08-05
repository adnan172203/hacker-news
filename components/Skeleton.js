import Skeleton,{ SkeletonTheme }from 'react-loading-skeleton';

const Skeletons = () => {
  return (
    <section className="skeleton-bg">
        <SkeletonTheme >
      <ul className='list'>
        {Array(10)
          .fill()
          .map((item, index) => (
            <li key={index}>
              <Skeleton/>
              <p className='card-channel'>
                <span>
                  {' '}
                  <Skeleton width={`20%`} />
                </span>
                <span>
                  <Skeleton width={`20%`} />
                </span>
              </p>
            </li>
          ))}
      </ul>
      </SkeletonTheme>
      <style jsx>{`
        .skeleton-bg{
            background:#fff;
            border-radius:5px;
        }

        ul.list {
          padding: 1rem;
        }

        ul.list li {
          list-style: none;
        }

        ul.list li span {
          border-radius: 0;
        }
        .card-channel span {
          padding-right: 1rem;
          border-radius: 0;
        }
      `}</style>
    </section>
  );
};

export default Skeletons;
