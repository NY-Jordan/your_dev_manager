export const mycodereviews = [
    {
        code : ` npm install`,
        description : "comande pour ouvrir une tâche sur your dev-manager",
        like: 40,
        dislike: 20,
        username : {
            name : 'Ny-Jordan',
            picture : "",

        }


    },
    
    {
        code : `php artisan serve`,
        description : "Ce code en JavaScript utilise la bibliothèque moment.js .",
        like: 40,
        dislike: 20,
        username : {
            name : 'Ny-Jordan',
            picture : "",

        }


    },
   
];

export const codereviews = [
    {
        code : `
            export function useWeb3AnalyticsReporter() {
            const { pathname, search } = useLocation();
            const { provider } = useWeb3React(); 
            //track page-views
            ;
            }`,
        description : "comande pour ouvrir une tâche sur your dev-manager",
        like: 40,
        dislike: 20,
        username : {
            name : 'Ny-Jordan',
            picture : "",

        }


    },
    {
        code : `
        'use client'

        import NextImage, { ImageProps } from 'next/image'
        import { cn } from '@/libs/utils'
        
        type Props = Omit<ImageProps, 'priority' | 'loading'> & {
          className?: string
        }
        
        const Image = ({ className, ...props }: Props) => (
          <div
            aria-hidden="true"
            className={cn(
              'relative overflow-hidden rounded-lg bg-secondary-100',
              className
            )}>
            <NextImage
              {...props}
              className="h-full w-full max-w-none object-cover object-center"
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
              fill
            />
          </div>
        )
        
        export default Image
        `,
        description : "NextJS image composant avec Tailwindcss",
        like: 40,
        dislike: 20,
        username : {
            name : 'mckenziearts',
            picture : "",

        }
    },
    {
        code : `
            export function useWeb3AnalyticsReporter() {
            const { pathname, search } = useLocation();
            const { provider } = useWeb3React(); 
            //track page-views
            ;
            }`,
        description : "comande pour ouvrir une tâche sur your dev-manager",
        like: 40,
        dislike: 20,
        username : {
            name : 'Ny-Jordan',
            picture : "",

        }


    },
    {
        code : `
            export function useWeb3AnalyticsReporter() {
            const { pathname, search } = useLocation();
            const { provider } = useWeb3React(); 
            //track page-views
            ;
            }`,
        description : "comande pour ouvrir une tâche sur your dev-manager",
        like: 40,
        dislike: 20,
        username : {
            name : 'Ny-Jordan',
            picture : "",

        }


    },
    {
        code : `
            export function useWeb3AnalyticsReporter() {
            const { pathname, search } = useLocation();
            const { provider } = useWeb3React(); 
            //track page-views
            ;
            }`,
        description : "comande pour ouvrir une tâche sur your dev-manager",
        like: 40,
        dislike: 20,
        username : {
            name : 'Ny-Jordan',
            picture : "",

        }


    },
    {
        code : `
        import moment from 'moment';

        const datesArray = (from, to, interval) => {
          let ret = [];
          const fromDate = moment(from, 'DD-MM-YYYY');
          const toDate = moment(to, 'DD-MM-YYYY');
          let date = fromDate.add(interval, 'days');
          while(toDate > date) {
            ret.push(date.format('MM-DD-YYYY'));
            date = moment(date).add(interval, 'days');
          }
          return ret;
        }
        ///
        datesArray(moment().add(-7, "days"), moment().add(7, "days"), 1)
        //
        
        Output : ['25 octobre 2022', '26 octobre 2022', '27 octobre 2022', '28 octobre 2022', '29 octobre 2022', '30 octobre 2022', '31 octobre 2022', '01 novembre 2022', '02 novembre 2022', '03 novembre 2022', '04 novembre 2022', '05 novembre 2022', '06 novembre 2022']`,
        description : "Ce code en JavaScript utilise la bibliothèque moment.js pour générer un tableau de dates entre une date de début et une date de fin, avec un intervalle spécifié, puis formate ces dates dans le style 'MM-DD-YYYY'.",
        like: 40,
        dislike: 20,
        username : {
            name : 'Ny-Jordan',
            picture : "",

        }


    },
    {
        code : `
        <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteCond %{HTTPS} off
        RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R,L]
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteCond %{REQUEST_FILENAME} !-l
        RewriteRule . /index.html [L]
      </IfModule>`,
        description : ".htaccess file which redirect the correct url on an apache server when a built js framework il use",
        like: 40,
        dislike: 20,
        username : {
            name : 'Ny-Jordan',
            picture : "",

        }


    },
];