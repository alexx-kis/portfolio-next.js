import WorksList from '@/components/layout/works-list/works-list';
import MainButton from '@/components/ui/main-button/main-button';
import { AppRoute, basePath } from '@/constants/const';
import { WORKS } from '@/data/works';
import './works-section.scss';

// @======================== WorksSection ========================@ //

function WorksSection(): React.JSX.Element {

  const worksList = WORKS.slice(0, 4);

  return (
    <section className='works scroll' id='works'>
      <div className='container'>
        <div className='works__inner'>
          <h2 className='works__heading heading'>My works</h2>
          <WorksList worksList={worksList} />
          <MainButton
            bemClassName='works__button'
            href={AppRoute.Works}
            text='See more'
            iconPath={`${basePath}/img/icons/go-to-arrow.svg`}
          />
        </div>
      </div>
    </section>
  );
}
export default WorksSection;