import React from "react";

const AboutChurch = () => {
  return (
    <section className="">
      <div className="width grid grid-cols-1 lg:grid-cols-3 gap-5 text-justify">
        <div className="">
          <h2 className="text-2xl lg:text-4xl font-extrabold border-s-4 lg:border-s-8 pl-3 border-red-900/95 text-gray-800 w-fit mx-auto text-center">
            WE SERVE GOD <br />
            BY <span className="text-red-900/95">HIS SPIRIT</span>
          </h2>
        </div>
        <div className="flex flex-col gap-5 lg:text-lg text-gray-600 lg:leading-8">
          <p>
            Celebration Church International (CCI) is a mission-minded teaching
            ministry founded in 2012 by Apostle Emmanuel Iren. Our vision is to
            see all people celebrate endless life in Christ Jesus and fully
            embrace the power of His death, burial, and resurrection.
          </p>
          <p>
            At CCI, we are committed to knowing Christ deeply and making Him
            known across the world. We nurture spiritual growth through in-depth
            teaching services, powerful prayer sessions, and outreach programs,
            empowering believers to live out their faith boldly. Our services
            are marked by the gifts of the Spirit, where prayer, prophecies, and
            spiritual songs flow freely in an atmosphere of worship.
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:text-lg text-gray-600 lg:leading-8">
          <p>
            We hold firmly to the Word of God as the ultimate standard for
            doctrine, and we believe that the greatest demonstration of God's
            love is found in the redemptive work of Christ. Through His grace,
            we are blessed and righteous in His sight.
          </p>
          <p>
            Under Apostle Emmanuel Iren's leadership, CCI has grown from a
            campus fellowship into a global ministry with over 15,000 members
            and more than 30 campuses across Nigeria, Europe, Canada, and the
            USA. We are the hands and feet of Christ, spreading the gospel to
            the uttermost parts of the earth. We are the hands and feet of
            Christ, spreading the gospel to the uttermost parts of the earth—one
            billion souls in 10,000 cities for Christ.
          </p>
        </div>
      </div>
      <div className="bg-black text-white flex items-center justify-center min-h-[60vh]" id="mission">
        <div className="width">
          <p className="text-center text-2xl md:text-4xl font-extrabold mb-5 text-white">
            COGCC
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center">
            <div className="flex flex-col gap-2 bg-white rounded-xl px-6 py-10">
              <p className="text-xl font-semibold tracking-wider text-red-900/95 text-center">
                OUR MISSION
              </p>
              <p className="text-gray-800 font-medium text-sm xl:text-lg">
                At Celebration Church International, the Word of God is
                emphasized to ensure every member knows and understands the
                lordship of Jesus and experiences progress and joy in the faith
              </p>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded-xl px-6 py-10">
              <p className="text-xl font-semibold tracking-wider text-red-900/95 text-center">
                OUR VISION
              </p>
              <p className="text-gray-800 font-medium text-sm xl:text-lg">
                Your life should reflect the death and resurrection of Jesus
                Christ every single day. It’s not enough to simply know that
                Jesus is Lord—you must live out that truth in everything you do.
              </p>
            </div>
            <div className="flex flex-col gap-2 bg-white rounded-xl px-6 py-10">
              <p className="text-xl font-semibold tracking-wider text-red-900/95 text-center">
                OUR INSPIRATION
              </p>
              <p className="text-gray-800 font-medium text-sm xl:text-lg">
                Celebrating the finished work of Jesus means sharing it with the
                world. We are called to boldly proclaim His love and grace to as
                many people as we can.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChurch;
